// Example of dynamic listing loading (simplified)

const listings = [
    {
        img: 'listing1.jpg',
        title: 'Luxury Beachfront Villa',
        rating: '4.9 ★ (200)',
        type: 'Entire villa · Bali',
        price: '$300/night'
    },
    {
        img: 'listing2.jpg',
        title: 'Modern City Apartment',
        rating: '4.7 ★ (180)',
        type: 'Entire apartment · New York',
        price: '$150/night'
    }
    // Add more listings as needed
];

function loadListings() {
    const listingGrid = document.querySelector('.listing-grid');
    listings.forEach(listing => {
        const listingDiv = document.createElement('div');
        listingDiv.className = 'listing';
        listingDiv.innerHTML = `
            <img src="${listing.img}" alt="${listing.title}">
            <div class="listing-details">
                <h3>${listing.title}</h3>
                <p>${listing.rating} · ${listing.type}</p>
                <p>${listing.price}</p>
            </div>
        `;
        listingGrid.appendChild(listingDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadListings);
