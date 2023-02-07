const productsItems = [
    {
        id: 1,
        itemId: "all",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0",
        name: "n1 Burger",
        price: "29.90",
      },
      {
        id: 2,
        itemId: "all",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2",
        name: "n2 Burger",
        price: "39.90",
      },
      {
        id: 3,
        itemId: "all",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
        name: "n3 Burger",
        price: "12.90",
      },
      {
        id: 4,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger4.png?alt=media&token=f219c72c-22b5-484a-9135-34bbb84e7faa",
        name: "n4 Burger",
        price: "14.90",
      },
      {
        id: 5,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger5.png?alt=media&token=e8963c79-af46-4f33-a28d-059f98f464e3",
        name: "n5 Burger",
        price: "19.90",
      },
      {
        id: 6,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger6.png?alt=media&token=f2b8febd-f0f8-48d7-9e1a-72d26b7bb36b",
        name: "n6 Burger",
        price: "21.90",
      },
      {
        id: 7,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza1.png?alt=media&token=7ffbc681-5d86-4429-888b-9597f3e800e8",
        name: "n1 pizza",
        ratings: 5,
        price: "39.90",
      },
      {
        id: 8,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza2.png?alt=media&token=e9b65d7f-bd12-4c33-b172-729f1dfcf461",
        name: "n2 pizza",
        ratings: 5,
        price: "29.90",
      },
      {
        id: 9,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza3.png?alt=media&token=4dea85ad-c36d-405a-adcd-a9dfd0c63a6a",
        name: "n3 pizza",
        ratings: 5,
        price: "49.90",
      },
      {
        id: 10,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza4.png?alt=media&token=1e5259ff-3431-4c76-830e-80e9d7dcc01e",
        name: "n5 pizza",
        ratings: 4,
        price: "69.90",
      },
      {
        id: 11,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza5.png?alt=media&token=42bafbe4-f993-4aeb-93ee-57ea04b7cf1b",
        name: "n5 pizza",
        ratings: 4,
        price: "19.90",
      },
      {
        id: 12,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizza6.png?alt=media&token=72a1e335-68d0-4b1c-8bbd-f28c656ce3b5",
        name: "n6 pizza",
        ratings: 4,
        price: "79.90",
      },
      {
        id: 13,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
        name: "Hot Dog",
        ratings: 4,
        price: "14.90",
      },
      {
        id: 14,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog2.png?alt=media&token=20c79a23-546f-48ef-a0fb-d6801e22273c",
        name: "Hot Dog",
        ratings: 4,
        price: "14.90",
      },
      {
        id: 15,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog3.png?alt=media&token=f0f0024f-0c1f-48ff-b589-b7f484ab5c96",
        name: "Hot Dog",
        ratings: 4,
        price: "14.90",
      },
      {
        id: 16,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog4.png?alt=media&token=0c0e6531-db79-42b8-94f9-78a6d618f20c",
        name: "Hot Dog",
        ratings: 4,
        price: "14.90",
      },
      {
        id: 17,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog5.png?alt=media&token=95f8330f-dc35-4029-b125-d9cf01e3e345",
        name: "Hot Dog",
        ratings: 4,
        price: "14.90",
      },
      {
        id: 18,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog6.png?alt=media&token=d371d7dd-c23e-465a-87ec-605c7ed3bc02",
        name: "Hot Dog",
        ratings: 3,
        price: "14.90",
      },
      {
        id: 19,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 20,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco2.png?alt=media&token=a6e8d72e-f288-48dc-9f26-8322774f5216",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 21,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco3.png?alt=media&token=daa2cf5b-36b7-426a-9f2c-73ae70e62634",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 22,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco4.png?alt=media&token=5d067124-870f-4ea8-afe1-5bd4f94ca20c",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 23,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco5.png?alt=media&token=910f236f-2149-46cf-9b74-7d1ee0323c93",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 24,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco6.png?alt=media&token=91214a30-cad0-434d-9339-3c658150ccab",
        name: "Taco",
        ratings: 3,
        price: "9.90",
      },
      {
        id: 25,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
        name: "pipoca",
        ratings: 4,
        price: "7.90",
      },
      {
        id: 26,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack2.png?alt=media&token=55d7fc65-869b-4d8b-83b3-be0158474413",
        name: "Snack",
        ratings: 4,
        price: "17.90",
      },
      {
        id: 27,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack3.png?alt=media&token=76b488a6-be44-4a3e-a29e-c34ac17f2e2c",
        name: "fritas",
        ratings: 4,
        price: "29.90",
      },
      {
        id: 28,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack4.png?alt=media&token=1efcd8c0-098b-44a5-8113-da225e7358ce",
        name: "Snack",
        ratings: 4,
        price: "11.90",
      },
      {
        id: 29,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack5.png?alt=media&token=80cece50-38cd-489f-a73f-edd740fba4ab",
        name: "pastel",
        ratings: 4,
        price: "11.90",
      },
      {
        id: 30,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack6.png?alt=media&token=a36cb2c5-72d1-4364-9817-3a8eb8c244b6",
        name: "cheetos",
        ratings: 4,
        price: "7.90",
      },
      {
        id: 31,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
        name: "guaraná",
        ratings: 4,
        price: "9.90",
      },
      {
        id: 32,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink2.png?alt=media&token=872c5ddd-23ae-4f1e-b1dd-18d375240ba6",
        name: "monster",
        ratings: 4,
        price: "7.50",
      },
      {
        id: 33,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink3.png?alt=media&token=c0efdccf-149a-4063-9658-00ae6c7c69dc",
        name: "redbul",
        ratings: 4,
        price: "7.50",
      },
      {
        id: 34,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink4.png?alt=media&token=eaaa8826-7fc0-499f-9eaf-8369ff99c112",
        name: "suco",
        ratings: 4,
        price: "5.50",
      },
      {
        id: 35,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink5.png?alt=media&token=eecf1eee-73f5-4705-a7ce-9ccc363f4f47",
        name: "Drink",
        ratings: 4,
        price: "32.50",
      },
      {
        id: 36,
        itemId: "all",
        imgSrc:
          "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink6.png?alt=media&token=86c4ba2c-0db7-47f0-b8cf-fed24db6c1ae",
        name: "Sprite",
        ratings: 4,
        price: "5.50",
      },

]


export default productsItems