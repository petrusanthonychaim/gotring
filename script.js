document.addEventListener('DOMContentLoaded', function() {
    const restaurants = [
        {
            name: "Ikan Tongkol Balado",
            price: "Rp.25.000",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=200&h=120&auto=format&fit=crop"
        },
        {
            name: "Ayam Pop",
            price: "Rp.28.000",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=120&auto=format&fit=crop"
        },
        {
            name: "Rendang",
            price: "Rp.30.000",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=120&auto=format&fit=crop"
        },
        {
            name: "Paru Cabe Ijo",
            price: "Rp.35.000",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=120&auto=format&fit=crop"
        },
        {
            name: "Telur Dadar",
            price: "Rp.25.000",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=120&auto=format&fit=crop"
        },
    ];

    const restaurantsList = document.getElementById('restaurantsList');

    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="restaurant-name">${restaurant.price}</div>
            </div>
        `;
        
        restaurantsList.appendChild(restaurantCard);
    });

    // Auto-adjust divider width based on content
    function adjustDivider() {
        const container = document.querySelector('.container');
        const dividerLines = document.querySelectorAll('.divider-line');
        const containerWidth = container.clientWidth;
        const contentWidth = containerWidth > 600 ? containerWidth * 0.8 : containerWidth * 0.9;
        
        dividerLines.forEach(line => {
            line.style.width = `${(containerWidth - contentWidth) / 2}px`;
        });
    }

    // Initial adjustment and on resize
    adjustDivider();
    window.addEventListener('resize', adjustDivider);
});