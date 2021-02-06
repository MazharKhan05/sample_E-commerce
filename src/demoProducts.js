import uniqid from "uniqid";
export const products = [
	{
		name: "Mixed Veggie Roll",
		id: uniqid(),
		price: "100",
		Cat: "Veg",
		mainCat: "Starters",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { small: "2 pieces", medium: " 4 pieces", large: "6 pieces" },
		img:
			"https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2017/02/spring-rolls-street-food-recipes-11.jpg",
	},
	{
		name: "Jain Veg Ring",
		id: uniqid(),
		price: "110",
		Cat: "Veg",
		mainCat: "Starters",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { small: "3 pieces", medium: " 6 pieces", large: "9 pieces" },
		img:
			"http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Jain-Veg-Ring.jpg",
	},
	{
		name: "Chicken-65",
		id: uniqid(),
		price: "180",
		Cat: "Non-Veg",
		mainCat: "Starters",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { small: "3 pieces", medium: " 5 pieces", large: "8 pieces" },
		img:
			"https://i.pinimg.com/originals/64/cc/25/64cc2574f3478659e58f2cde73578f40.jpg",
	},
	{
		name: "Tandoori Chicken",
		id: uniqid(),
		price: "250",
		Cat: "Non-Veg",
		mainCat: "Starters",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { small: "1 pieces", medium: " 3 pieces", large: "5 pieces" },
		img:
			"https://5.imimg.com/data5/JQ/JM/GLADMIN-56669953/tandoori-chicken-500x500.png",
	},
];

export const mainProducts = [
	{
		name: "Curry Chicken",
		id: uniqid(),
		price: "130",
		Cat: "Non-Veg",
		mainCat: "Main-Course",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { medium: " Half-Plate", large: "Full-Plate" },
		img:
			"http://feenix.co.in/wp-content/uploads/2018/01/4033ec43408dd69ead59e4f9502a07d7.jpg",
	},
	{
		name: "Crispy Fried Chicken",
		id: uniqid(),
		price: "180",
		Cat: "Non-Veg",
		mainCat: "Main-Course",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { small: "3 pieces", medium: " 5 pieces", large: "10 pieces" },
		img:
			"http://lovelysweets.ca/image/cache/catalog/Main%20Course%20(Non-Veg.)-400x300.jpg",
	},
	{
		name: "Chicken Fried Rice",
		id: uniqid(),
		price: "140",
		Cat: "Non-Veg",
		mainCat: "Main-Course",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { medium: " half-Plate", large: "Full-Plate" },
		img: "https://justtadka.com/images/product/CHICKEN%20FRIED%20RICE.jpg",
	},
	{
		name: "Murgh Ajmeri",
		id: uniqid(),
		price: "200",
		Cat: "Non-Veg",
		mainCat: "Main-Course",
		Characteristics: "Fresh and handpicked from farm",
		quantity: { medium: "Half-Plate", large: "Full-Plate" },
		img:
			"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Murgh_Ajmeri.jpg",
	},
];
