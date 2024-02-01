# Run jq to get a list of unused dependencies
$unusedDependencies = & jq -r '.dependencies | keys_unsorted - .devDependencies | join(" ")' package.json

# Output the list of unused dependencies
Write-Output "Unused Dependencies: $($unusedDependencies)"

# Uninstall the unused dependencies
if ($unusedDependencies) {
    Write-Output "Uninstalling unused dependencies..."
    & npm uninstall $unusedDependencies
} else {
    Write-Output "No unused dependencies found."
}