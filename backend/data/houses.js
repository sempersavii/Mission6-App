const houses = [
    {
        name: "Apartment-1",
        location: "38K Horoeka Avenue, Mount Eden, 1024",
        suburb: "MT EDEN",
        image: "http://localhost:3000/images/apartment1.jpg",
        title: "beautifully presented two bedroom one level unit suit couple",
        description: "This delightful 1970’s 2 bedroom, fully renovated apartment is located in a very appealing street.The bright and sunny open plan living area flows onto a private deck with spectacular views to Sky Tower in the distance. Complete with new quality appliances, a stunning kitchen and bathroom makeover, new floor coverings & LED lights. Internal access secure lockup garage plus storage locker. If you are looking for a great central location (Double Grammar Zone) at a very affordable price, this gorgeous apartment is an opportunity not to be missed. Make an online enquiry today to receive information on viewing times.",
        price: 600,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "yes"
    },
    {
        name: "Apartment-2",
        location: "1106/207 Federal street, City Centre (Auckland City), 1010",
        suburb: "CITY CENTRE",
        image: "http://localhost:3000/images/apartment2.jpg",
        title: "",
        description: "Located in the Heart of the City, Federal Street is the gateway to SKYCITY. It has also transformed into an inner-city hot spot for food lovers with some of the best eateries in Auckland. Located within a few minutes walking distance from the universities, public transport facilities, Queen St shopping and famous Auckland City Waterfront and Viaduct Basin.",
        price: 480,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "no"
    },
    {
        name: "Apartment-3",
        location: "5/2 Atarangi Road, Greenlane, 1051",
        suburb: "GREENLANE",
        image: "http://localhost:3000/images/apartment3.jpg",
        title: "",
        description: "Lovely 2 bedroom apartment in a small tidy block of apartments in a great location. Open plan living with a modern kitchen includes dishwasher and whiteware. Laundry whiteware also included – washing machine and a separate dryer. Living area leads out to a sunny deck. 2 car parks in the basement garage – remote entry. The apartment building is located close to shops, bus stops, short distance to Cornwall Park & easy access onto the motorway. Move in costs four weeks bond and one week in advance.",
        price: 480,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "yes"
    },
    {
        name: "Apartment-4",
        location: "501/105 Symonds Street, Auckland Central",
        suburb: "CITY CENTRE",
        image: "http://localhost:3000/images/apartment4.jpg",
        title: "",
        description: "Fully FURNISHED one bedroom apartment located on the 5th level with an extra study room/single bedroom and 1 bathroom with a washing machine and a dryer. The interior of the apartment has been finished to a high standard to provide a real scene of home & elegance, including air conditioning, double-glazed windows (varying degrees of views), and high-stud living area ceilings. The apartment complex is located within a short walking distance to Auckland University, AUT, K Road shops and cafes, as well as the public transport and Auckland Hospital. Suitable for up to 2 tenants.Move in costs: 4 weeks rent as bond + 1st week's rent.",
        price: 510,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "yes"
    },
    {
        name: "Apartment-5",
        location: "2A/189 Hobson Street, City Centre (Auckland City), 1010",
        suburb: "CITY CENTRE",
        image: "http://localhost:3000/images/apartment5.jpg",
        title: "",
        description: "This fully furnished apartment features 1 good-sized bedroom, 1 study and 1 bathroom with a washer and a dryer. The kitchen is equipped with a hob, microwave, oven, fridge and a dishwasher. Convenient location on Hobson St provides an easy access to all the attractions of the City Centre as well as immediate access to Motorway Systems. Hot and cold water are included in rent, and an onsite building manager provides a positive influence. The residents can also enjoy the use of the onsite gym. Suitable for up to 2 tenants.",
        price: 300,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "no"
    },
    {
        name: "Apartment-6",
        location: "C716/176 Broadway, Newmarket, 1023",
        suburb: "NEWMARKET",
        image: "http://localhost:3000/images/apartment6.jpg",
        title: "",
        description: "This sunny two bedroom apartment offers open plan living with two double bedrooms, two bathrooms (one ensuite), a secure carpark and whiteware which includes fridge/freezer, dish drawer, dryer and washing machine. Situated right on the top floor at the end of the sunny courtyard – so no through traffic past your apartment. Enjoy the fabulous Newmarket lifestyle with shops, restaurants, cafes, cinemas and transport at your door. Double grammar zone and also zoned for Auckland Normal Intermediate and New Market School. Moving cost is 4 weeks bond, 1st week rent.",
        price: 510,
        bathrooms: 2,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes",
        nearParks: "yes"
    },
    {
        name: "Apartment-7",
        location: "9/23 Locarno Avenue, Sandringham, 1025",
        suburb: "SANDRINGHAM",
        image: "http://localhost:3000/images/apartment7.jpg",
        title: "",
        description: "This newly renovated ground floor unit is located in the popular area of Sandringham. Offering 2 bedrooms and 1 bathroom. Entry is through the kitchen which leads into the open planned lounge/ dining area with heat pump and off this flows a small balcony with outdoor space. Comes with one allocated carpark spot at the front of the unit. Conveniently located within reasonable walking distance to St Lukes Shopping Mall, local parks, schools and public transport.",
        price: 500,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes" 
    },
    {
        name: "Apartment-8",
        location: "3/3 Parrish Road, Sandringham, 1025",
        suburb: "SANDRINGHAM",
        image: "http://localhost:3000/images/apartment8.jpg",
        title: "", 
        description: "This gorgeous 2 bedroom unit is set in a lovely secure section with well cared for gardens. This is a very sunny and quiet location. This home has recently been through a renovation and is bright, modern and fresh. We are looking for a couple or small family to make Parrish Rd their home. New: kitchen, bathroom, curtains, paint, carpets and flooring. This home also comes with new appliances: cook-top, oven, range hood, dishwasher and dryer. Also a heatpump and ventilation system. This home has a light and sunny lounge and main bedroom. Plenty of storage space, wardrobes and cupboards. Secure gated property with Electronic gate and remote control. One off street park. Walking distance to bus and train. Close to St Lukes Mall, Kingsland and Dominion Rd.",
        price: 550,
        bathrooms: 1,
        bedrooms: 2,
        allowPets: "yes",
        carPark: "yes",
        nearGrocery: "yes"
    }
]
export default houses;