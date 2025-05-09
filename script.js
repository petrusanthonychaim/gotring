document.addEventListener('DOMContentLoaded', function() {
    const loadingModal = document.getElementById('loadingAlertModal');
    const submitAlertDataButton = document.getElementById('submitAlertDataButton');
    const inputNamaEl = document.getElementById('inputNama');
    const inputUmurEl = document.getElementById('inputUmur');
    const navbarNameElement = document.querySelector('#nav_items a');

    let userName = ""; 
    let userAge = "";  

    if (loadingModal && inputNamaEl && inputUmurEl && submitAlertDataButton) {
        loadingModal.style.display = 'flex'; 

        submitAlertDataButton.addEventListener('click', function() {
            userName = inputNamaEl.value.trim();
            userAge = inputUmurEl.value.trim();

            if (userName === "") {
                alert("Nama tidak boleh kosong.");
                inputNamaEl.focus();
                return;
            }
            if (userAge === "" || isNaN(parseInt(userAge)) || parseInt(userAge) <= 0 || parseInt(userAge) > 120) {
                alert("Umur tidak valid. Harap masukkan angka antara 1 dan 120.");
                inputUmurEl.focus();
                return;
            }
            
            console.log("Nama Pengguna Disimpan:", userName);
            console.log("Umur Pengguna Disimpan:", userAge);

            if (navbarNameElement && userName) {
                navbarNameElement.textContent = userName;
            }

            loadingModal.style.display = 'none'; 
        });
    }

    const originalRestaurants = [ 
        {
            name: "RESTAURANT PADANG SALERO UNO",
            items: [
                { id: "pad1", name: "Ikan salmon balado", price: 15000, categories:["seafood","spicy"], image: "restaurant1/resto1a.jpg" },
                { id: "pad2", name: "Ayam pop", price: 17500, categories:["meat"], image: "/restaurant1/resto1b.jpg" },
                { id: "pad3", name: "Rendang", price: 20000, categories:["meat","spicy"], image: "/restaurant1/resto1c.jpg" },
                { id: "pad4", name: "Paru cabe ijo", price: 20000, categories:["meat","spicy"], image: "/restaurant1/resto1d.jpg" },
                { id: "pad5", name: "Telur dadar", price: 12000, categories:["egg"], image: "/restaurant1/resto1e.jpg" }
            ]
        },
        {
            name: "KING SEAFOOD",
            items: [
                { id: "ks1", name: "Mo yung hai udang ayam", price: 30000, categories:["meat","seafood"], image: "/restaurant2/resto2a.jpg" },
                { id: "ks2", name: "Kangkung cah seafood", price: 35000, categories:["vegetables","seafood"], image: "/restaurant2/resto2b.jpg" },
                { id: "ks3", name: "Cumi saos padang", price: 45000, categories:["seafood","spicy"], image: "/restaurant2/resto2c.jpg" },
                { id: "ks4", name: "Gurame goreng", price: 45000, categories:["seafood"], image: "/restaurant2/resto2d.jpg" },
                { id: "ks5", name: "Udang tauco medan", price: 40000, categories:["seafood"], image: "/restaurant2/resto2e.jpg" }

            ]
        },
        {
            name: "RUMAH MAKAN MARI JO",
            items: [
                { id: "mj1", name: "Ayam rica - rica", price: 25000, categories:["meat","spicy"], image: "/restaurant3/resto3a.jpg" },
                { id: "mj2", name: "Ikan kembung bakar rica", price:25000 , categories:["seafood","spicy"], image: "/restaurant3/resto3b.jpg" },
                { id: "mj3", name: "Abon cakalang", price:25000 , categories:["seafood"], image: "/restaurant3/resto3c.jpg" },
                { id: "mj4", name: "Tumis bunga pepaya", price:30000 , categories:["vegetables"], image: "/restaurant3/resto3d.jpg" },
                { id: "mj5", name: "Ikan cakalang cabe rica", price:35000 , categories:["seafood","spicy"], image: "/restaurant3/resto3e.jpg" }
            ]
        },
        {
            name: "WARTEG JAYA BAHAR EMAS",
            items: [
                { id: "wj1", name: "Telur Balado", price:15000 , categories:["egg","spicy"], image: "/restaurant4/resto4a.jpeg" },
                { id: "wj2", name: "Ayam teriyaki", price:17000 , categories:["meat"], image: "/restaurant4/resto4b.jpg" },
                { id: "wj3", name: "Oseng tempe", price:8000 , categories:["vegetables"], image: "/restaurant4/resto4c.jpg" },
                { id: "wj4", name: "Daging sapi lada hitam", price:20000 , categories:["meat","spicy"], image: "/restaurant4/resto4d.jpg" },
                { id: "wj5", name: "Kailan cah ayam", price:15000 , categories:["vegetables","meat"], image: "/restaurant4/resto4e.jpg" }
            ]
        },
        {
            name: "GLOBAL SPOON",
            items: [
                { id: "gs1", name: "Ayam korean d4mn", price:40000 , categories:["meat","spicy"], image: "/restaurant5/resto5a.jpg" },
                { id: "gs2", name: "Chicken schnitzel & salad", price:50000 , categories:["meat","vegetables"], image: "/restaurant5/resto5b.jpg" },
                { id: "gs3", name: "Pho ga", price:45000 , categories:["meat","vegetables"], image: "/restaurant5/resto5c.jpg" },
                { id: "gs4", name: "Ca kho to (Ikan claypot)", price:40000 , categories:["seafood","vegetables"], image: "/restaurant5/resto5d.jpg" },
                { id: "gs5", name: "Cuppa coup", price:35000 , categories:["seafood","spicy"], image: "/restaurant5/resto5e.jpg" }
            ]
        },
        {
            name: "SOTO BU KONDRO",
            items: [
                { id: "sbk1", name: "Soto betawi daging", price:30000 , categories:["meat","vegetables"], image: "/restaurant6/resto6a.jpg" },
                { id: "sbk2", name: "Sop iga sapi", price:35000 , categories:["meat"], image: "/restaurant6/resto6b.jpg" },
                { id: "sbk3", name: "Iga penyet pedas", price:40000 , categories:["meat","spicy"], image: "/restaurant6/resto6c.jpg" },
                { id: "sbk4", name: "Soto campur santan", price:30000 , categories:["meat"], image: "/restaurant6/resto6d.jpg" },
                { id: "sbk5", name: "Nasi goreng ayam dan telur", price:30000 , categories:["meat", "egg"], image: "/restaurant6/resto6e.jpg" }
            ]
        },
        {
            name: "EMPAL GENTONG KANG ADES",
            items: [
                { id: "eg1", name: "Empal gebuk sapi rica", price:35000 , categories:["meat","spicy"], image: "/restaurant7/resto7a.jpg" },
                { id: "eg2", name: "Empal cobek pedas", price:35000 , categories:["meat","spicy"], image: "/restaurant7/resto7b.jpg" },
                { id: "eg3", name: "Empal serundeng", price:30000 , categories:["meat"], image: "/restaurant7/resto7c.jpg" },
                { id: "eg4", name: "Empal goreng kecap", price:30000 , categories:["meat"], image: "/restaurant7/resto7d.jpg" },
                { id: "eg5", name: "Semur kentang tahu", price:35000 , categories:["vegetables"], image: "/restaurant7/resto7e.jpg" }
            ]
        },
        {
            name: "PECEL PINCUK IBU EDA",
            items: [
                { id: "ppi1", name: "Karedok pedas", price:15000 , categories:["vegetables","spicy"], image: "/restaurant8/resto8a.jpeg" },
                { id: "ppi2", name: "Sayur lodeh", price:15000 , categories:["vegetables"], image: "/restaurant8/resto8b.jpg" },
                { id: "ppi3", name: "Rawon iga sapi", price:30000 , categories:["meat"], image: "/restaurant8/resto8c.jpeg" },
                { id: "ppi4", name: "Pecel pincuk sayuran", price:15000 , categories:["vegetables"], image: "/restaurant8/resto8d.jpg" },
                { id: "ppi5", name: "Ayam goreng kremes", price:19000 , categories:["meat"], image: "/restaurant8/resto8e.jpg" }
            ]
        }
    ];

    const restaurantsListEl = document.getElementById('restaurantsList');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const generateButton = document.getElementById('generateButton');
    
    const recommendationCells = {
        senin: document.getElementById('rekomendasiSenin'),
        selasa: document.getElementById('rekomendasiSelasa'),
        rabu: document.getElementById('rekomendasiRabu'),
        kamis: document.getElementById('rekomendasiKamis'),
        jumat: document.getElementById('rekomendasiJumat'),
    };

    const userInputDayElements = {
        senin: document.getElementById('userInputSenin'),
        selasa: document.getElementById('userInputSelasa'),
        rabu: document.getElementById('userInputRabu'),
        kamis: document.getElementById('userInputKamis'),
        jumat: document.getElementById('userInputJumat'),
    };
    const daysOrder = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];

    let userMenuChoices = { senin: null, selasa: null, rabu: null, kamis: null, jumat: null };

    function getSelectedExcludedCategories() {
        const excluded = [];
        for (let i = 0; i < filterCheckboxes.length; i++) {
            const checkbox = filterCheckboxes[i];
            if (checkbox.checked) {
                excluded.push(checkbox.dataset.category);
            }
        }
        return excluded;
    }

    function itemIsVisible(item, excludedCategories) {
        if (!item || !item.categories) return false;
        if (excludedCategories.length === 0) return true;
        
        let hasExcludedCategory = false;
        for (let i = 0; i < item.categories.length; i++) {
            const cat = item.categories[i];
            if (excludedCategories.includes(cat)) { 
                hasExcludedCategory = true;
                break;
            }
        }
        return !hasExcludedCategory;
    }

    function renderMenuItems(itemsToRender) {
        restaurantsListEl.innerHTML = ''; 

        for (let i = 0; i < originalRestaurants.length; i++) {
            const restaurant = originalRestaurants[i];
            
            const visibleItemsInRestaurant = [];
            for (let j = 0; j < restaurant.items.length; j++) {
                const item = restaurant.items[j];
                let foundInItemsToRender = false;
                for (let k = 0; k < itemsToRender.length; k++) {
                    const filteredItem = itemsToRender[k];
                    if (filteredItem.id === item.id) {
                        foundInItemsToRender = true;
                        break;
                    }
                }
                if (foundInItemsToRender) {
                    visibleItemsInRestaurant.push(item);
                }
            }

            if (visibleItemsInRestaurant.length > 0) {
                const restaurantDiv = document.createElement('div');
                restaurantDiv.className = 'restaurant-container mb-12';

                const title = document.createElement('h2');
                title.className = 'text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200';
                title.textContent = restaurant.name;
                restaurantDiv.appendChild(title);

                const menuContainer = document.createElement('div');
                menuContainer.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4';

                for (let j = 0; j < visibleItemsInRestaurant.length; j++) {
                    const item = visibleItemsInRestaurant[j];
                    const menuItemDiv = document.createElement('div');
                    menuItemDiv.className = 'menu-item-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col';
                    menuItemDiv.dataset.itemId = item.id;
                    menuItemDiv.dataset.itemName = item.name;

                    let isItemSelectedInUserChoice = false;
                    const userMenuChoiceDays = Object.keys(userMenuChoices); 
                    for (let k = 0; k < userMenuChoiceDays.length; k++) {
                        const day = userMenuChoiceDays[k];
                        if (userMenuChoices[day] && userMenuChoices[day].id === item.id) {
                            isItemSelectedInUserChoice = true;
                            break;
                        }
                    }

                    menuItemDiv.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="w-full h-32 object-cover">
                        <div class="p-3 md:p-4 flex flex-col flex-grow">
                            <h3 class="font-semibold text-sm md:text-md mb-1 flex-grow">${item.name}</h3>
                            <p class="text-red-600 font-bold text-xs md:text-sm mb-3">Rp ${item.price.toLocaleString('id-ID')}</p>
                            <div class="quantity-control mt-auto flex items-center justify-center">
                                <button class="quantity-btn minus text-lg">-</button>
                                <div class="quantity-value text-sm font-bold mx-2">${isItemSelectedInUserChoice ? 1 : 0}</div>
                                <button class="quantity-btn plus text-lg">+</button>
                            </div>
                        </div>
                    `;
                    if (isItemSelectedInUserChoice) {
                        menuItemDiv.classList.add('selected');
                    }
                    menuContainer.appendChild(menuItemDiv);
                }
                restaurantDiv.appendChild(menuContainer);
                restaurantsListEl.appendChild(restaurantDiv);
            }
        }
        addQuantityButtonListeners(); 
    }

    function updateFilteredView() {
        const excludedCategories = getSelectedExcludedCategories();
        let flatFilteredItems = [];
        for (let i = 0; i < originalRestaurants.length; i++) {
            const resto = originalRestaurants[i];
            for (let j = 0; j < resto.items.length; j++) {
                const item = resto.items[j];
                if (itemIsVisible(item, excludedCategories)) {
                    flatFilteredItems.push(item);
                }
            }
        }
        renderMenuItems(flatFilteredItems);
    }
    
    function addQuantityButtonListeners() {
        const buttons = document.querySelectorAll('.quantity-btn');
        for (let i = 0; i < buttons.length; i++) {
            const btn = buttons[i];
            btn.removeEventListener('click', handleQuantityButtonClick); 
            btn.addEventListener('click', handleQuantityButtonClick);
        }
    }

    function handleQuantityButtonClick() {
        const valueElement = this.parentElement.querySelector('.quantity-value');
        const menuItemCard = this.closest('.menu-item-card');
        const itemId = menuItemCard.dataset.itemId;
        const itemName = menuItemCard.dataset.itemName;
        let currentQuantity = parseInt(valueElement.textContent);
        let newQuantity = currentQuantity;

        if (this.classList.contains('plus')) {
            if (currentQuantity === 0) {
                let itemAlreadyInChoiceForAnotherDay = false;
                for (let i = 0; i < daysOrder.length; i++) {
                    const day = daysOrder[i];
                    if (userMenuChoices[day] && userMenuChoices[day].id === itemId) {
                        itemAlreadyInChoiceForAnotherDay = true;
                        break;
                    }
                }

                if (!itemAlreadyInChoiceForAnotherDay) {
                    let addedToDaySlot = false;
                    for (let i = 0; i < daysOrder.length; i++) {
                        const day = daysOrder[i];
                        if (!userMenuChoices[day]) { 
                            userMenuChoices[day] = { id: itemId, name: itemName };
                            userInputDayElements[day].value = itemName;
                            newQuantity = 1; 
                            addedToDaySlot = true;
                            break; 
                        }
                    }
                    if (!addedToDaySlot) {
                        newQuantity = 0; 
                    }
                } else {
                    newQuantity = 1; 
                }
            } else {
                newQuantity = 1;
            }
        } else if (this.classList.contains('minus')) {
            if (currentQuantity === 1) { 
                newQuantity = 0; 
                for (let i = 0; i < daysOrder.length; i++) {
                    const day = daysOrder[i];
                    if (userMenuChoices[day] && userMenuChoices[day].id === itemId) {
                        userMenuChoices[day] = null;
                        userInputDayElements[day].value = '';
                        userInputDayElements[day].placeholder = '- Kosong -';
                        break; 
                    }
                }
            }
        }

        valueElement.textContent = newQuantity;
        if (newQuantity === 1) {
            menuItemCard.classList.add('selected');
        } else {
            menuItemCard.classList.remove('selected');
        }
    }
    
    for (let i = 0; i < filterCheckboxes.length; i++) { 
        const checkbox = filterCheckboxes[i];
        checkbox.addEventListener('change', updateFilteredView);
    }
    
    generateButton.addEventListener('click', function() {
        const excludedCategories = getSelectedExcludedCategories();
        let availableItems = [];
        for (let i = 0; i < originalRestaurants.length; i++) {
            const restaurant = originalRestaurants[i];
            for (let j = 0; j < restaurant.items.length; j++) {
                const item = restaurant.items[j];
                if (itemIsVisible(item, excludedCategories)) {
                    availableItems.push(item);
                }
            }
        }

        if (availableItems.length === 0) {
            for (let i = 0; i < daysOrder.length; i++) { 
                const day = daysOrder[i];
                recommendationCells[day].textContent = "No items match";
            }
            return;
        }

        for (let i = availableItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableItems[i], availableItems[j]] = [availableItems[j], availableItems[i]];
        }
        
        let usedNames = new Set(); 

        for (let index = 0; index < daysOrder.length; index++) {
            const dayKey = daysOrder[index];
            let recommendedItem = null;
            for (let i = 0; i < availableItems.length; i++) {
                const potentialItem = availableItems[(index + i) % availableItems.length]; 
                if (!usedNames.has(potentialItem.name)) {
                    recommendedItem = potentialItem;
                    break;
                }
            }
            if (!recommendedItem && availableItems.length > 0) {
                recommendedItem = availableItems[index % availableItems.length];
            }

            if (recommendedItem) {
                recommendationCells[dayKey].textContent = recommendedItem.name;
                usedNames.add(recommendedItem.name);
            } else {
                recommendationCells[dayKey].textContent = "-";
            }
        }
    });

    updateFilteredView();
});