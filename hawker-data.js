const STALL_DATA = [
  {
    number: 1, name: "Ahsan Corner", category: "Drinks & Beverages", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "Teh Tarik", price: 2.50 }, { item: "Milo Ais", price: 3.00 }, { item: "Nescafe Ais", price: 4.00 }]
  },
  {
    number: 2, name: "Nasi Lemak Cop Biru", category: "Local Food", owner: "Malay",
    hours: "Open 24 hours (except Friday)",
    menu: [{ item: "Nasi Lemak Biasa", price: 2.50 }, { item: "Nasi Lemak Telur", price: 4.00 }, { item: "Nasi Lemak Ayam Goreng", price: 7.00 }, { item: "Nasi Lemak Ayam Rendang", price: 7.00 }]
  },
  {
    number: 3, name: "Zura Kitchen Style", category: "Local Food", owner: null,
    hours: "10:00 AM – 7:00 PM",
    menu: [{ item: "Char Kuey Teow", price: 8.00 }, { item: "Nasi Goreng Biasa", price: 6.00 }, { item: "Nasi Goreng Pataya", price: 8.00 }, { item: "Nasi Goreng USA", price: 10.00 }, { item: "Kuey Teow Kungfu", price: 8.50 }, { item: "Nasi Goreng Cina", price: 7.00 }, { item: "Mee Goreng Mamak", price: 8.00 }, { item: "Nasi Goreng Kampung", price: 7.50 }]
  },
  {
    number: 4, name: "Nasi Lemak Cop Merah", category: "Local Food", owner: "Malay", famous: true,
    hours: "5:00 PM – 11:30 PM",
    menu: [{ item: "Nasi Lemak Biasa", price: 2.50 }, { item: "Nasi Lemak Telur Goreng", price: 4.00 }, { item: "Nasi Lemak Ayam Goreng", price: 7.00 }]
  },
  {
    number: 5, name: "Takoyaki Alfateh", category: "Japanese Food", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "5 pcs (Chicken Sausage & Crabstick)", price: 5.00 }, { item: "5 pcs (Prawn & Squid)", price: 6.00 }, { item: "12 pcs (Mix)", price: 10.00 }, { item: "12 pcs (Prawn & Squid)", price: 12.00 }]
  },
  {
    number: 6, name: "Ladyboss", category: "Drinks & Beverages", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "Teh Tarik", price: 2.50 }, { item: "Milo Ais", price: 3.00 }, { item: "Teh O Ais", price: 2.50 }, { item: "Fresh Orange", price: 6.00 }, { item: "Air Kacang", price: 5.00 }]
  },
  {
    number: 7, name: "Otak-Otak Ganu", category: "Local Food", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "Otak-Otak (1 pcs)", price: 0.80 }]
  },
  {
    number: 8, name: "Penyet-an", category: "Local Food", owner: null,
    hours: "10:00 AM – 5:30 PM",
    menu: [{ item: "Ayam Penyet", price: 8.00 }, { item: "Ayam Gepuk", price: 9.00 }]
  },
  {
    number: 9, name: "Kapla Corner", category: "Drinks & Beverages", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "Teh Tarik", price: 2.50 }, { item: "Milo Ais", price: 3.00 }]
  },
  {
    number: 10, name: "West Dine", category: "Western Cuisine", owner: null,
    hours: "5:00 PM – 12:30 AM",
    menu: [{ item: "Chicken Chop", price: 12.00 }, { item: "Fish n Chips", price: 15.00 }, { item: "Lamb Chop", price: 25.00 }]
  },
  {
    number: 11, name: "Laksa", category: "Local Food", owner: null,
    hours: "10:00 AM – 4:30 PM",
    menu: [{ item: "Laksa", price: 6.00 }, { item: "Laksa Double", price: 7.50 }]
  },
  {
    number: 12, name: "Mamak Corner", category: "Local Food", owner: null,
    hours: "7:00 AM – 11:30 AM",
    menu: [{ item: "Roti Canai", price: 1.20 }, { item: "Roti Telur", price: 2.00 }, { item: "Roti Sardin", price: 3.50 }, { item: "Roti Sarang Burung", price: 5.00 }]
  },
  {
    number: 13, name: "Coolblog", category: "Drinks & Beverages", owner: null,
    hours: "7:00 AM – 12:30 AM",
    menu: [{ item: "Teh Tarik", price: 2.50 }, { item: "Milo Ais", price: 3.00 }]
  },
  {
    number: 36, name: "Pak Uda", category: "Drinks & Beverages", owner: null,
    hours: "7:00 AM – 2:30 PM",
    menu: [{ item: "Teh Tarik", price: 2.50 }, { item: "Milo Ais", price: 3.00 }]
  },
  {
    number: 37, name: "Sup Meletop", category: "Local Food", owner: null,
    hours: "7:00 AM – 2:30 PM",
    menu: [{ item: "Nasi / Mee / Bihun", price: 2.50 }, { item: "Sup Ayam", price: 6.00 }, { item: "Sup Daging", price: 8.00 }, { item: "Sup Lidah", price: 15.00 }, { item: "Sup Paru", price: 10.00 }, { item: "Sup Campur", price: 7.00 }]
  },
  {
    number: 38, name: "Boats", category: "Steamboat & Grill", owner: null,
    hours: "7:00 AM – 11:30 PM",
    menu: [{ item: "Lidi Kuning (Sosej, Bebola)", price: 2.00 }, { item: "Lidi Hijau (Ayam)", price: 2.50 }, { item: "Lidi Merah (Daging)", price: 3.00 }, { item: "Sayur Kangkung", price: 0.50 }]
  },
  {
    number: 39, name: "Hanie Bakery", category: "Cake & Confectionery", owner: null,
    hours: "10:00 AM – 9:30 PM",
    menu: [{ item: "One Slice", price: 2.00 }, { item: "One Cake (6 slices)", price: 10.00 }]
  },
  {
    number: 40, name: "Ainul Seafood", category: "Seafood Cuisine", owner: null, famous: true,
    hours: "6:00 PM – 11:30 PM",
    menu: [{ item: "Oyster", price: 6.00 }, { item: "Kerang Bakar (per plate)", price: 10.00 }, { item: "Sotong Bakar (per plate)", price: 15.00 }, { item: "Ikan Siakap Bakar (per piece)", price: 20.00 }]
  },
  {
    number: 41, name: "Pizzaini", category: "Italian Food", owner: null,
    hours: "2:00 PM – 11:30 PM",
    menu: [{ item: "Macaroni Pizza", price: 25.00 }, { item: "Paperoni Pizza", price: 28.00 }, { item: "Lamb Mushroom Pizza", price: 45.00 }]
  },
  {
    number: 42, name: "Steak & Grill", category: "Western Food", owner: null,
    hours: "6:00 PM – 11:30 PM",
    sharedWith: [43],
    menu: [{ item: "Chicken Chop", price: 15.00 }, { item: "Fish n Chips", price: 12.00 }, { item: "Lamb Chop", price: 15.00 }, { item: "Beef Steak", price: 20.00 }, { item: "Wagyu AAA Steak", price: 95.00 }]
  },
  {
    number: 43, name: "Steak & Grill", category: "Western Food", owner: null,
    hours: "6:00 PM – 11:30 PM",
    sharedWith: [42],
    menu: [{ item: "Chicken Chop", price: 15.00 }, { item: "Fish n Chips", price: 12.00 }, { item: "Lamb Chop", price: 15.00 }, { item: "Beef Steak", price: 20.00 }, { item: "Wagyu AAA Steak", price: 95.00 }]
  },
  {
    number: 44, name: "Nasi Lemak Suri", category: "Local Food", owner: null,
    hours: "Open 24 hours (except Friday 12:30 PM – 2:30 PM)",
    sharedWith: [45],
    menu: [{ item: "Nasi Lemak", price: 2.00 }, { item: "Add-on Ayam Goreng", price: 7.00 }, { item: "Add-on Sotong Sambal", price: 8.00 }, { item: "Add-on Kerang Sambal", price: 8.00 }]
  },
  {
    number: 45, name: "Nasi Lemak Suri", category: "Local Food", owner: null,
    hours: "Open 24 hours (except Friday 12:30 PM – 2:30 PM)",
    sharedWith: [44],
    menu: [{ item: "Nasi Lemak", price: 2.00 }, { item: "Add-on Ayam Goreng", price: 7.00 }, { item: "Add-on Sotong Sambal", price: 8.00 }, { item: "Add-on Kerang Sambal", price: 8.00 }]
  },
  {
    number: 46, name: "Omarilah", category: "Local Food", owner: null,
    hours: "6:00 AM – 11:30 AM",
    sharedWith: [47, 48],
    menu: [{ item: "Nasi Lemak", price: 2.00 }, { item: "Nasi Lemak Ayam Goreng", price: 7.00 }, { item: "Nasi Kukus Ayam Berempah", price: 9.00 }]
  },
  {
    number: 47, name: "Omarilah", category: "Local Food", owner: null,
    hours: "6:00 AM – 11:30 AM",
    sharedWith: [46, 48],
    menu: [{ item: "Nasi Lemak", price: 2.00 }, { item: "Nasi Lemak Ayam Goreng", price: 7.00 }, { item: "Nasi Kukus Ayam Berempah", price: 9.00 }]
  },
  {
    number: 48, name: "Omarilah", category: "Local Food", owner: null,
    hours: "6:00 AM – 11:30 AM",
    sharedWith: [46, 47],
    menu: [{ item: "Nasi Lemak", price: 2.00 }, { item: "Nasi Lemak Ayam Goreng", price: 7.00 }, { item: "Nasi Kukus Ayam Berempah", price: 9.00 }]
  }
];
