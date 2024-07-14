function toggleIcons(checkbox) {
    const settingsDiv = checkbox.parentElement.nextElementSibling;
    if (checkbox.checked) {
        settingsDiv.style.display = 'none';
    } else {
        settingsDiv.style.display = 'flex';
    }
}

// Initial check to hide icons for already checked checkboxes
document.querySelectorAll('.list-container input[type="checkbox"]').forEach(checkbox => {
    toggleIcons(checkbox);
});
