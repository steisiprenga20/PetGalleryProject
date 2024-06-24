document.addEventListener("DOMContentLoaded", () => {
    const pets = [
        {
            name: "Poi",
            type: " Maltese Dog",
            origin: "Malta",
            img: "images/po.jpg",
            description: "Lifespan: 12-15 years.Intelligent and easy to train.Common health issues: Patellar luxation, dental problems, and white dog shaker syndrome. Fun fact:They are often used as therapy dogs due to their gentle and affectionate nature."
        },
        {
            name: "Misha",
            type: "British Cat",
            origin: "British",
            img: "images/misha.jpg",
            description: "British cats are known for their calm and easygoing nature, making them great companions. They are known for their dense, plush coats and round faces with large, round eyes.Coolest Fact: British cats were believed to have been brought to Britain by the Romans, making them one of the oldest known cat breeds in the country. "
        },
        {
            name: "BuggsBunny",
            type: "American Rabbit",
            origin: "American",
            img:"images/rabbit.jpg",
            description: "American Rabbits are known for their gentle and calm demeanor. They are friendly and social animals that can make great pets, especially for families with children.With proper care, American Rabbits can live for 5 to 10 years or more. "
        },
        {
            name: "Rain",
            type: "Golden Retriever Dog",
            origin: "Scotland",
            img:"images/golden.gif",
            description: "Golden Retrievers are known for their friendly and gentle nature. They are great family pets and are particularly good with children. They are also intelligent and eager to please, making them easy to train. While generally healthy, Golden Retrievers are prone to certain health issues, including hip dysplasia, elbow dysplasia, and certain eye conditions. Regular vet check-ups and a healthy diet are important for their well-being. The average lifespan of a Golden Retriever is around 10-12 years."
        },
        {
            name: "Mei",
            type: "Birman Cat",
            origin: "France",
            img:"images/BIRMAN.jpg",
            description: "The Birman cat, also known as the 'Sacred Cat of Burma,' is a strikingly beautiful breed with a silky coat, deep blue eyes, and distinctive white 'gloves' on its paws. Known for their affectionate and gentle nature, Birmans are loyal companions who enjoy being around people and other pets",
        },
        {
            name: "Choko",
            type: "Maltese Dog",
            origin: "Malta",
            img:"images/dog.jpg",
            description:"The Maltese is a small, charming dog breed known for its long, silky white coat and expressive eyes. These affectionate and playful dogs make excellent companions, thriving on human interaction. However, Maltese dogs are prone to certain health issues such as dental problems, patellar luxation, and respiratory conditions due to their small size. Regular vet check-ups and proper care are essential to keep them healthy and happy.",
        },
        {
            name: "Luna",
            type: "French Bulldog Dog",
            origin: "France",
            img:"images/french.gif",
            description: "The French Bulldog, affectionately known as the 'Frenchie,' is a small, muscular dog with a smooth coat, distinctive bat-like ears, and a charming, playful personality. These loyal and affectionate dogs make wonderful companions and adapt well to various living environments. However, French Bulldogs are prone to certain health issues, including brachycephalic syndrome, hip dysplasia, and skin allergies. Regular veterinary care and attention to their specific needs are crucial to ensure their well-being.",
        },  
        { 
            name: "Pisika",
            type: "American Cat",
            origin: "American",
            img:"images/pisika.jpg",
            description: "The American Shorthair cat is a sturdy, friendly breed known for its diverse range of coat colors and patterns. These cats are intelligent, adaptable, and make excellent family pets due to their gentle and affectionate nature. American Shorthairs are generally healthy, but they can be prone to certain conditions such as obesity and hypertrophic cardiomyopathy. Regular exercise, a balanced diet, and routine veterinary check-ups are important to keep them healthy and active.",
        },
        { 
            name: "Abu",
            type: "Monkey",
            origin: "Florida",
            img:"images/MONKEY.jpg",
            description: "Rhesus macaques are a species of monkey that have established a notable population in Florida, particularly around Silver Springs State Park. These intelligent and adaptable primates are characterized by their reddish-brown fur and expressive faces. While they are fascinating to observe, it's important to note that they can carry diseases such as herpes B virus, which can pose a risk to humans. Maintaining a safe distance and avoiding direct interaction with these monkeys is crucial for both their well-being and public health.",
        },
        { 
            name: "Bello",
            type: "Pekingese Dog",
            origin: "China",
            img:"images/bello.jpg",
            description:"The Pekingese, a breed originating from China, is a small, regal dog known for its lion-like mane, flat face, and distinctive, flowing coat. These loyal and affectionate dogs have a proud demeanor and often form strong bonds with their owners. However, Pekingese dogs are prone to several health issues, including brachycephalic syndrome, which affects their breathing due to their flat faces, as well as eye problems, hip dysplasia, and heart issues. Regular veterinary care and attentive grooming are essential to keep them healthy and comfortable.",
        },
        { 
            name: "Boni",
            type: "Parrot",
            origin: "Africa",
            img:"images/Boni.jpeg",
            description:" African Greys are renowned for their exceptional intelligence and are considered one of the most intelligent bird species. They are known for their ability to learn a large vocabulary of words and phrases and can often mimic human speech with remarkable accuracy. African Grey Parrots are long-lived birds, with an average lifespan of 40-60 years in captivity. With proper care, some individuals can live even longer, sometimes up to 80 years.",
        },
        { 
            name: "Nemo",
            type: "Fish",
            origin: "Great Barrier Reef off the coast of Australia",
            img:"images/Nrmo.jpg",
            description: "Clownfish are known for their interesting behaviors. They are territorial and will fiercely defend their home anemone against intruders. They are also known to exhibit a unique mating behavior, where the dominant female in a group will transform into a male if the dominant male dies. Clownfish are omnivorous and feed on a diet of algae, zooplankton, small crustaceans, and occasionally, leftover food from their anemone host. ",
        },
        { 
        name: "Hami",
        type: "Hamster",
        origin: "Asia",
        img:"images/hamster.jpg",
        description: ": Asian hamsters are nocturnal, meaning they are most active during the night. They are also social animals and are often found living in groups in the wild. However, they can become aggressive towards each other, especially when kept in captivity in small cages. In the wild, Asian hamsters feed on a diet of seeds, grains, and insects. In captivity, they should be fed a balanced diet of commercial hamster food supplemented with fresh fruits, vegetables, and occasional treats like mealworms.", 
        },
    ];

    const petGallery = document.getElementById("pet-gallery");
    const petModal = document.getElementById("pet-modal");
    const modalContent = document.getElementById("modal-body");
    const closeModal = document.getElementById("close-modal");
    const searchInput = document.getElementById("search-bar");

    function displayPets(petsArray) {
        petGallery.innerHTML = "";
        petsArray.forEach(pet => {
            const petCard = document.createElement("div");
            petCard.className = "pet-card";
            petCard.innerHTML = `
                <img src="${pet.img}" alt="${pet.name}">
                <h3>${pet.name}</h3>
            `;
            petCard.addEventListener("click", () => {
                modalContent.innerHTML = `
                    <img src="${pet.img}" alt="${pet.name}">
                    <h3>${pet.name}</h3>
                    <p>Type: ${pet.type}</p>
                    <p>Origin: ${pet.origin}</p>
                    <p>${pet.description}</p>
                `;
                petModal.style.display = "block";
                petModal.style.opacity = 1;
            });
            petGallery.appendChild(petCard);
        });
    }

    function filterPets(searchTerm) {
        const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchTerm.toLowerCase()));
        displayPets(filteredPets);
    }

    searchInput.addEventListener("input", () => {
        filterPets(searchInput.value);
    });

    closeModal.addEventListener("click", () => {
        petModal.style.opacity = 0;
        setTimeout(() => {
            petModal.style.display = "none";
        }, 300);
    });

    window.addEventListener("click", (event) => {
        if (event.target == petModal) {
            petModal.style.opacity = 0;
            setTimeout(() => {
                petModal.style.display = "none";
            }, 300);
        }
    });

    
    displayPets(pets);
});
