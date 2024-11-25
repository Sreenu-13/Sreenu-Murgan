// Generic function to handle modal behavior
function handleModal(openId, modalId, closeClass) {
    const openModalBtn = document.getElementById(openId);
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector(closeClass);

    // Open the modal
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = "flex"; // Show the modal
    });

    // Close the modal when 'x' is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
}

// Handle all modals
handleModal("openModelcer1", "myModelcer1", ".close");
handleModal("openModelcer2", "myModelcer2", ".close");
handleModal("openModelcer3", "myModelcer3", ".close");
