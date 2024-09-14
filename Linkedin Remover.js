// Function to add a clickable 'X' next to the three dots for each connection
function addRemoveButtons() {
    // Get all the three-dot menus
    let menus = document.querySelectorAll('.artdeco-dropdown__trigger.artdeco-dropdown__trigger--placement-bottom.ember-view');

    menus.forEach(menu => {
        // Create a new 'X' button
        let removeButton = document.createElement('button');
        removeButton.innerText = 'X';
        removeButton.style.color = 'red';
        removeButton.style.marginLeft = '10px';

        // Append the 'X' button after the three dots
        menu.parentElement.appendChild(removeButton);

        // When 'X' is clicked, simulate the remove process
        removeButton.addEventListener('click', () => {
            // Simulate clicking the three dots to open the dropdown
            menu.click();
            setTimeout(() => {
                // Find the "Remove connection" option in the dropdown
                let removeOption = [...document.querySelectorAll('span')].find(el => el.innerText.includes('Remove connection'));
                if (removeOption) {
                    removeOption.click();
                    setTimeout(() => {
                        // Find and click the "Remove" button in the popup
                        let confirmButton = document.querySelector('.artdeco-button--primary');
                        if (confirmButton) {
                            confirmButton.click();
                            console.log('Connection removed!');
                        }
                    }, 500); // Wait for popup to appear
                }
            }, 500); // Wait for the dropdown to open
        });
    });
}

// Run the function to add remove buttons
addRemoveButtons();
