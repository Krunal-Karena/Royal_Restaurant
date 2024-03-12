import { TMenu } from '#utils/database/models/menu';

/* eslint-disable max-len */
const sandwiches = [
	{
		name: 'Chilli Paneer in Herbed Bun',
		description: 'A tangy chilli paneer filling topped with sliced cheese in a herbed bun. Serving size (g/ml) - 160g/598kcal. Allergen - Soy, Wheat, Milk An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Sandwiches',
		price: 275,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/ad6/3cc2f43fdc1598b665cbff2ef39e8ad6.jpg',
	},
	{
		name: 'Baked Veggie Bagel',
		description: 'Herb roasted farm fresh vegetables cooked in a tomato based sauce and sandwiched in a sunflower seed and paprika bagel. Contains - Wheat, Milk, Soy 170 g | 419 kcal An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Sandwiches',
		price: 265,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/cc9/558a09a7dbe2ba3a16cd6a2906f80cc9.jpg',
	},
	{
		name: 'Chilli Cheese Toast',
		description: 'Cheesy and fiery snack on a toasted French-style baguette, topped with red, yellow and green pepper and chopped green chilli. 2 pieces per portion. Serving size (g/ml) - 140g/479kcal. Allergen - Contains Wheat, Milk, Soy, Rye, Oat An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Sandwiches',
		price: 335,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/224/72d8311ac79219f8968f4e4b405f0224.jpg',
	},
];

const wraps = [
	{
		name: 'Chatpata Paratha Wrap',
		description: 'Tangy paneer and vegetable filling wrapped in spinach paratha. Serving size (g/ml) - 180g/465kcal. Allergen - Contains Wheat, Milk, Soy, Nut An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Wraps',
		price: 330,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/9ab/cfa9373790b5cb34bee6488a65a2c9ab.jpg',
	},
];

const mainCourse = [
	{
		name: 'Paneer tikka masala',
		description: 'Paneer tikka masala is a delicious Indian curry made by cooking paneer tikka in a spicy gravy. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Main Course',
		price: 300,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://cdn1.foodviva.com/static-content/food-images/curry-recipes/paneer-tikka-masala-recipe/paneer-tikka-masala-recipe.jpg',
	},
	{
		name: 'Kaju Ganthiya',
		description: 'Kaju Ganthiya is a popular Gujarati snack made with gram flour, cashew nuts, and spices. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Main Course',
		price: 280,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://img-global.cpcdn.com/recipes/8bcd70d907200f9d/680x482cq70/kaju-gathiya-sabzi-recipe-main-photo.jpg',
	},
	{
		name: 'Unthiyu',
		description: 'Undhiyu is a Gujarati mixed vegetable dish that is a regional specialty of Surat, India. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Main Course',
		price: 320,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://carveyourcraving.com/wp-content/uploads/2019/09/undhiyu-pressure-cooker-indian.jpg',

	},
	{
		name: 'Butter Naan',
		description: 'Butter Naan is a leavened Indian bread made with all-purpose flour, yeast, sugar, and yogurt. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Main Course',
		price: 100,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-1.jpg',
	},
	{
		name: 'Butter roti',
		description: 'Butter Roti is a type of Indian bread that is made with whole wheat flour. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Main Course',
		price: 60,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://thalitime.in/wp-content/uploads/2023/12/butter-roti.jpg',
	},
];

const starter = [
	{
		name: 'Manchow Soup',
		description: 'A spicy and tangy soup with vegetables and noodles. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Starter',
		price: 150,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://thumbs.dreamstime.com/b/veg-manchow-soup-black-bowl-wooden-background-279284188.jpg?w=768',
	},
	{
		name: 'Hot & Sour',
		description: 'A spicy and sour soup with vegetables and noodles. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Starter',
		price: 150,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg',
	},
	{
		name: 'Hara bhara kabab',
		description: 'A vegetarian Indian snack composed of spinach, potatoes, and green peas. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Starter',
		price: 200,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://1.bp.blogspot.com/-X-anqIw-Nug/YKPAjJJYxjI/AAAAAAAAmb4/ot46CDpMUasTLtb3pyq1CKaAnODrqs07wCLcBGAsYHQ/s2048/_MG_3359.jpeg',
	},
	{
		name: 'Mix Salad',
		description: 'A mix of fresh vegetables and fruits. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Starter',
		price: 100,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://fitfoodiefinds.com/wp-content/uploads/2023/02/Spring-Mix-Lettuce-Salad-20.jpg',
	},
	{
		name: 'Masala Papad',
		description: 'A thin, crisp disc-shaped food typically based on seasoned dough made from black gram, fried or cooked with dry heat. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Starter',
		price: 50,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-Step-5.jpg',
	},
];

const desserts = [
	{
		name: 'Chocolate Brownie Cupcake',
		description: 'A gooey and fudgy walnut brownie loaded with chocolate. 2 pieces per portion. Serving size (g/ml) - 80g/416kcal. Allergen - Soy, Wheat, Milk, Nut. An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Desserts',
		price: 280,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/522/d6a7a8887b303e5000b22a44b510a522.jpg',
	},
	{
		name: 'Blueberry Muffin',
		description: 'Buttery vanilla cake with blueberries dusted with granulated sugar for a delightfully crunchy texture. Serving size (g/ml) - 120g/376kcal. Allergen - Contains Wheat, Milk, Egg. An average active adult requires 2000 kcal energy per day; however, calorie needs may vary.',
		category: 'Desserts',
		price: 295,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/ea6/4e399d9520fea6ae652fe41ffbcbcea6.jpg',
	},
];

const coldBeverages = [
	{
		name: 'Chaas',
		description: 'A refreshing blend of yogurt, water, and spices. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverage',
		price: 50,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://2.bp.blogspot.com/-cX3gx9MISrg/UVfvipU-AwI/AAAAAAAAJUc/SM2XYvUYa4Y/s1600/IMG_1144.JPG',
	},
	{
		name: 'Punjabi Lassi',
		description: 'A traditional Punjabi lassi. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverage',
		price: 70,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/52/00/a0/lassi-ka-glass-ahaha.jpg',
	},
	{
		name: 'Cold Coffee',
		description: 'Our signature rich in flavour espresso blended with delicate vanilla flavour and milk to create a perfect cold coffee delight. An all time favourite. Allergen - Contains Milk, Tall: 354 ML, 354 kcal, Grande: 473 ML, 473 kcal, Venti: 591 ML, 501 kcal.An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverages',
		price: 280,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/15f/f43e4676fbf1e1519a18d93e3340e15f.jpg',
	},
	{
		name: 'Chocolate Milkshake',
		description: 'Our Restaurent signature chocolate perfected for you as a smooth and delightful milkshake. Happiness in every sip. Energy - Tall (354ml) - 632 kcal / Grande (473ml) - 825 kcal / Venti (591ml) 1050 kcal. Allergen - Contains Wheat, Milk, Soy. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverages',
		price: 295,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/450/ddffd6918a67a3e5f37a7bd3c21fb450.jpg',
	},
	{
		name: 'Strawberry Milkshake',
		description: 'A Delicious milkshake for those with a sweet tooth and love our favourite berry, Strawberry. Energy - Tall (354ml) - 569 kcal / Grande (473ml) - 769 kcal / Venti (591ml) 943 kcal. Allergen - Milk. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverages',
		price: 295,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/a37/e7c3aad38b061ab1e09d2fa829843a37.jpg',
	},
	{
		name: 'Vanilla Milkshake',
		description: 'Your favourite Vanilla milkshake is now at here. A perfect delight for any mood. Energy - Tall (354ml) - 531 kcal / Grande (473ml) - 700 kcal / Venti (591ml) 920 kcal. Allergen - Milk. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Cold Beverages',
		price: 295,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/adf/35e43f1e67336d6464f569dd22703adf.jpg',
	},
];

const hotBeverages = [
	{
		name: 'Coffee',
		description: 'Your favourite South Indian filter coffee prepared using a blend of our medium and dark roast coffees. Unreasonably perfect. Energy - Hot - Picco (180ml) / Short (236ml) - 226 kcal. Allergen - Contains Milk. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Hot Beverages',
		price: 250,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/a70/0c685119085657406f83377693bc1a70.jpg',
	},
	{
		name: 'Masala Chai',
		description: 'Our traditional masala chai with abundance of strong Indian spices and flavourful handpicked teas. Energy - Hot - Picco (180ml) - 161 kcal / Short (237ml) - 237 kcal. Allergen - Contains Milk. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Hot Beverages',
		price: 250,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/5e4/24eba55ea8ac447037d90e3aee86a5e4.jpg',
	},
	{
		name: 'Elaichi Chai',
		description: 'Our traditional chai with abundance of Cardamom and flavourful handpicked teas. Energy - Hot - Picco (180ml) - 161 kcal / Short (237ml) - 236 kcal. Allergen - Contains Milk. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Hot Beverages',
		price: 250,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/3be/b09d7eaefb1de31a585a80884c8393be.jpg',
	},
	{
		name: 'Cappuccino',
		description: 'Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It\'s truly the height of our baristas\' craft. Allergen - Contains Milk, Short: 237 ML, 104 kcal, Tall: 354 ML, 104 kcal, Grande: 473 ML, 173 kcal, Venti: 591 ML, 220 kcal',
		category: 'Hot Beverages',
		price: 305,
		foodType: 'sweet',
		veg: 'veg',
		image: 'https://b.zmtcdn.com/data/dish_photos/468/beafebeb370a02fdc9fdd1dc4ac45468.jpg',
	},

];

const dalRice = [
	{
		name: 'Veg Hydrabadi Dum Biryani',
		description: 'Aromatic basmati rice cooked with vegetables and spices. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Dal Rice',
		price: 300,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://kannanskitchen.com/wp-content/uploads/2021/04/DSC_1079_1.jpg',
	},
	{
		name: 'Dal fry & Jeera Rice',
		description: 'Dal fry is a popular Indian lentil recipe. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Dal Rice',
		price: 330,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://t4.ftcdn.net/jpg/04/27/20/65/360_F_427206531_P2PkuQBC7jWNP40jwhqkrpMm9xdqFWkU.jpg',
	},
	{
		name: 'Kadhi Khichadi',
		description: 'Kadhi is a popular North Indian dish. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.',
		category: 'Dal Rice',
		price: 320,
		foodType: 'spicy',
		veg: 'veg',
		image: 'https://c8.alamy.com/comp/RBP27R/indian-food-khichdi-with-kadhi-india-asia-RBP27R.jpg',
	},
];

let menus = [
	...dalRice,
	...mainCourse,
	...starter,
	...coldBeverages,
	...hotBeverages,
	...sandwiches,
	...wraps,
	...desserts,
] as TMenu[];

menus = menus.map((menu) => {
	menu.restaurantID = 'royal11';
	if (!menu?.taxPercent) menu.taxPercent = 5;
	if (!menu?.hidden) menu.hidden = false;
	return menu;
});

export { menus };
