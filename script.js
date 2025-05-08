document.addEventListener('DOMContentLoaded', function() {
    const restaurants = [
        {
            name: "RESTAURANT PADANG SALERO UNO",
            items: [
                { name: "Ikan Tongkol Balado", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=200&h=120&auto=format&fit=crop" },
                { name: "Ayam Pop", price: "Rp.28.000", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=120&auto=format&fit=crop" },
                { name: "Rendang", price: "Rp.30.000", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=120&auto=format&fit=crop" },
                { name: "Paru Cabe Ijo", price: "Rp.35.000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=120&auto=format&fit=crop" },
                { name: "Telur Dadar", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT MINANG ASLI",
            items: [
                { name: "Sate Padang", price: "Rp.32.000", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&h=120&auto=format&fit=crop" },
                { name: "Gulai Kambing", price: "Rp.40.000", image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=200&h=120&auto=format&fit=crop" },
                { name: "Dendeng Batokok", price: "Rp.35.000", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT SUNDA MAHARAJA",
            items: [
                { name: "Nasi Liwet", price: "Rp.30.000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=120&auto=format&fit=crop" },
                { name: "Tumis Kangkung", price: "Rp.20.000", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=120&auto=format&fit=crop" },
                { name: "Ayam Goreng", price: "Rp.28.000", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=200&h=120&auto=format&fit=crop" },
                { name: "Sambal Terasi", price: "Rp.10.000", image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT JAWA TIMUR",
            items: [
                { name: "Rawon", price: "Rp.35.000", image: "https://images.unsplash.com/photo-1604908177453-7462950a6cf3?w=200&h=120&auto=format&fit=crop" },
                { name: "Soto Ayam", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=200&h=120&auto=format&fit=crop" },
                { name: "Tahu Tek", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=120&auto=format&fit=crop" },
                { name: "Tahu Tekooo", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT ACEH",
            items: [
                { name: "Mie Aceh", price: "Rp.35.000", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&h=120&auto=format&fit=crop" },
                { name: "Kuah Beulangong", price: "Rp.30.000", image: "https://images.unsplash.com/photo-1611270630411-99356d1e0a9b?w=200&h=120&auto=format&fit=crop" },
                { name: "Sate Matang", price: "Rp.32.000", image: "https://images.unsplash.com/photo-1546069901-6586ba033cce?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT BETAWI",
            items: [
                { name: "Soto Betawi", price: "Rp.30.000", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=120&auto=format&fit=crop" },
                { name: "Kerak Telor", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=120&auto=format&fit=crop" },
                { name: "Asinan Betawi", price: "Rp.22.000", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT BALI",
            items: [
                { name: "Ayam Betutu", price: "Rp.40.000", image: "https://images.unsplash.com/photo-1604908177453-7462950a6cf3?w=200&h=120&auto=format&fit=crop" },
                { name: "Babi Guling", price: "Rp.45.000", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&h=120&auto=format&fit=crop" },
                { name: "Lawar", price: "Rp.28.000", image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=200&h=120&auto=format&fit=crop" }
            ]
        },
        {
            name: "RESTAURANT MANADO",
            items: [
                { name: "Tinoransak", price: "Rp.38.000", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=120&auto=format&fit=crop" },
                { name: "Cakalang Fufu", price: "Rp.35.000", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=120&auto=format&fit=crop" },
                { name: "Bubur Manado", price: "Rp.25.000", image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=200&h=120&auto=format&fit=crop" }
            ]
        }
    ];

    const restaurantsList = document.getElementById('restaurantsList');

    restaurants.forEach(restaurant => {
        // Create restaurant container
        const restaurantDiv = document.createElement('div');
        restaurantDiv.className = 'restaurant-container';

        // Add restaurant title
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200';
        title.textContent = restaurant.name;
        restaurantDiv.appendChild(title);

        // Create menu items container
        const menuContainer = document.createElement('div');
        menuContainer.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4';

        // Add menu items
        restaurant.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item-card bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200';

            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-full h-32 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-1">${item.name}</h3>
                    <p class="text-red-500 font-bold mb-3">${item.price}</p>
                    <div class="quantity-control">
                        <div class="quantity-btn minus">-</div>
                        <div class="quantity-value">0</div>
                        <div class="quantity-btn plus">+</div>
                    </div>
                </div>
            `;

            menuContainer.appendChild(menuItem);
        });

        restaurantDiv.appendChild(menuContainer);
        restaurantsList.appendChild(restaurantDiv);
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const valueElement = this.parentElement.querySelector('.quantity-value');
            const menuItemCard = this.closest('.menu-item-card');
            let value = parseInt(valueElement.textContent);

            if (this.classList.contains('minus')) {
                value = 0; // Set to minimum (0) when minus is clicked
            } else if (this.classList.contains('plus')) {
                value = 1; // Set to maximum (1) when plus is clicked
            }

            valueElement.textContent = value;

            // Toggle selected class based on value
            if (value === 1) {
                menuItemCard.classList.add('selected');
            } else {
                menuItemCard.classList.remove('selected');
            }
        });
    });
});