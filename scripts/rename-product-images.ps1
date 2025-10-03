# rename-product-images.ps1
# Uso: ejecutar desde la raíz del repo (o ajustar $Root)
# Este script renombra todas las imágenes dentro de cada subcarpeta de src/img/products
# de forma que queden numeradas secuencialmente: 1.png, 2.png, 3.png ...
# Protección: hace renombre en dos pasos para evitar colisiones (nombres temporales).

param(
    [string]$Root = "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)",
    [switch]$DryRun
)

$productsDir = Join-Path $Root '..\src\img\products'
if (-not (Test-Path $productsDir)) {
    Write-Error "No se encontró la carpeta: $productsDir"
    exit 1
}

Get-ChildItem -Path $productsDir -Directory | ForEach-Object {
    $sub = $_
    Write-Host "Procesando carpeta: $($_.FullName)" -ForegroundColor Cyan

    # Listar sólo archivos PNG/JPG/JPEG (ignorando subdirectorios)
    $files = Get-ChildItem -Path $_.FullName -File | Where-Object { $_.Extension -match '\.png$|\.jpg$|\.jpeg$' } | Sort-Object Name
    if ($files.Count -eq 0) {
        Write-Host " - No hay archivos de imagen en esta carpeta, saltando." -ForegroundColor Yellow
        return
    }

    # Paso 1: renombrar a nombres temporales para evitar colisiones
    $tmpMap = @{}
    $i = 0
    foreach ($f in $files) {
        $i++
        $tmpName = "tmp_rename_${i}_${([guid]::NewGuid().ToString()).Substring(0,8))}${f.Extension}"
        $tmpPath = Join-Path $f.DirectoryName $tmpName
        if ($DryRun) {
            Write-Host "  DRY: Renombrar '$($f.Name)' -> '$tmpName'"
        } else {
            Rename-Item -LiteralPath $f.FullName -NewName $tmpName
        }
        $tmpMap[$tmpName] = $f.Extension
    }

    # Paso 2: renombrar temporales a 1.png, 2.png, ... conservando la extensión original
    $count = 0
    $tmpFiles = Get-ChildItem -Path $_.FullName -File | Where-Object { $_.Name -like 'tmp_rename_*' } | Sort-Object Name
    foreach ($tf in $tmpFiles) {
        $count++
        $ext = $tf.Extension.ToLower()
        $newName = "$count$ext"
        $newPath = Join-Path $tf.DirectoryName $newName
        if ($DryRun) {
            Write-Host "  DRY: Renombrar temporales '$($tf.Name)' -> '$newName'"
        } else {
            Rename-Item -LiteralPath $tf.FullName -NewName $newName
        }
    }

    Write-Host " - Hecho: $count archivos renombrados." -ForegroundColor Green
}

Write-Host "Proceso completado." -ForegroundColor Green
