// script.js

// Global variables
let isModalOpen = false;
let isLoading = false;

// Function with parameters and return value
function calculateTripCost(days, altitude) {
    const baseRate = 100;
    const altitudeFactor = altitude / 1000;
    return Math.round(days * baseRate * altitudeFactor);
}

// Function demonstrating scope
function calculateAndShowDuration(days, altitude) {
    // Local variables
    const cost = calculateTripCost(days, altitude);
    const durationText = `${days} days | Starting from $${cost}`;
    
    // Using closure to access the event target
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const durationInfo = card.querySelector('.duration-info');
        if (durationInfo) {
            durationInfo.textContent = durationText;
        }
    });
}

// Function to toggle modal visibility
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('show');
    isModalOpen = true;
}

function hideBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('show');
    isModalOpen = false;
}

// Function to toggle loading spinner
function toggleLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    isLoading = show;
    if (show) {
        spinner.classList.add('show');
    } else {
        spinner.classList.remove('show');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            toggleLoading(true);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            toggleLoading(false);
            hideBookingModal();
            alert('Booking submitted successfully!');
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('bookingModal');
        if (e.target === modal) {
            hideBookingModal();
        }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isModalOpen) {
            hideBookingModal();
        }
    });
});