import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	query,
	setDoc,
	addDoc,
	where,
	collection,
	Timestamp,
	getDocs,
	writeBatch,
	documentId
} from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyC0T3ISNgodFGRmoFGcXHXcnJphLrLpL1A",
	authDomain: "reactmovies-f65ad.firebaseapp.com",
	projectId: "reactmovies-f65ad",
	storageBucket: "reactmovies-f65ad.appspot.com",
	messagingSenderId: "692161280283",
	appId: "1:692161280283:web:f5af73c489c079d6943bbe",
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

// obtener todos los items
// async/await ---> sugar synax ---> promises
export async function getAllItems() {
	// obtenemos la referencia a la coleccion de items
	const miColec = collection(firestoreDB, "movies");
	// obtenemos todos los items
	/* getDocs(miColec).then( result => miVariable = result  */
	const moviesSnap = await getDocs(miColec);

	return moviesSnap.docs.map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	});
}

// obtener todos los items de una categoria
export async function getItemsByCategory(categoryId) {
	// obtenemos la referencia a la coleccion de items
	const miColec = collection(firestoreDB, "movies");
	const queryMovie = query(miColec, where("genre", "==", categoryId));

	const moviesSnap = await getDocs(queryMovie);

	return moviesSnap.docs.map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	});
}

//obtener un solo item segun el ID para pasar a Item Detail
export async function getItem(id) {
	const miColec = collection(firestoreDB, "movies");
	const movieRef = doc(miColec, id);
	const movieSnap = await getDoc(movieRef);

	return { ...movieSnap.data(), id: movieSnap.id };
}

export async function dataToFirebase() {
	const PRODUCTS = [
		{
			id: 1,
			imgUrl:
				"http://1.bp.blogspot.com/-qxM5EzxDDBU/UVA4Xc6uuCI/AAAAAAAAhzw/4WUUzyrWc1Q/s1600/wolverine-poster1.jpg",
			title: "Wolverine, The",
			genre: "Action",
			stock: 28,
			price: 148.77,
			year: 1937,
		},
		{
			id: 2,
			imgUrl:
				"https://alchetron.com/cdn/Paper-Man-2009-film-images-7097ff47-dd6a-4767-8236-3a1d2f0ec9a.jpg",
			title: "Paper Man",
			genre: "Comedy",
			year: 2010,
			price: 11.38,
			stock: 81,
		},
		{
			id: 3,
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/en/9/99/Tales-of-manhattan-1942.jpg",
			title: "Tales of Manhattan",
			genre: "Comedy",
			year: 2000,
			price: 3.69,
			stock: 58,
		},
		{
			id: 4,
			imgUrl: "https://m.media-amazon.com/images/I/51zUz0KU-yL.jpg",
			title: "House of Mirth, The",
			genre: "Romance",
			year: 1991,
			price: 8.29,
			stock: 46,
		},
		{
			id: 5,
			imgUrl:
				"https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic2.abc.es%2Fmedia%2Fpeliculas%2F000%2F054%2F108%2Fdriven-el-origen-de-la-leyenda-1.jpg&nuevoancho=683&medio=abc",
			title: "Driven",
			genre: "Action",
			year: 1990,
			price: 9.57,
			stock: 57,
		},
		{
			id: 6,
			imgUrl:
				"https://1.bp.blogspot.com/-mk2NMclbbT0/XuaPQEXM_zI/AAAAAAAAtaA/2rBIrkcsBNYI_I4BiF9AQhb_YbsOVOaDgCK4BGAsYHg/s1627/Screenshot_20200615-065654_Chrome.jpg",
			title: "Pandora's Box (Büchse der Pandora, Die)",
			genre: "Drama",
			year: 1993,
			price: 14.77,
			stock: 7,
		},
		{
			id: 7,
			imgUrl:
				"https://i.pinimg.com/originals/81/3b/12/813b129598ece66d1e285af7d4317040.jpg",
			title: "Mysterious Mr. Moto",
			genre: "Drama",
			year: 1951,
			price: 12.43,
			stock: 3,
		},
		{
			id: 8,
			imgUrl:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d696cc9b221622584a249858dbe6ce61_d9a5a51d-3154-4e94-b981-bf01b103d34c_480x.progressive.jpg?v=1573590455",
			title: "Hellraiser: Inferno",
			genre: "Horror",
			year: 1998,
			price: 7.01,
			stock: 39,
		},
		{
			id: 9,
			imgUrl:
				"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/93641553c23b282012e1b370eb5a1ac5_277d183d-8a0b-498e-b6c7-6b2fb27d8c3e_480x.progressive.jpg?v=1573617434",
			title: "Silence, The (Sokout)",
			genre: "Drama",
			year: 2010,
			price: 5.06,
			stock: 92,
		},
	];

	// remplazar "cities" por el nombre de la coleccion
	const miColeccion = collection(firestoreDB, "movies");

	PRODUCTS.forEach((item) => {
		const newDoc = doc(miColeccion);
		setDoc(newDoc, item)
			.then(() => {
				console.log("Document written with id: ", newDoc.id);
			})
			.catch((err) => {
				console.error("Error adding document: ", err);
			});
	});
}

export async function saveDoc() {
	const movie = {
		id: 8,
		imgUrl:
			"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d696cc9b221622584a249858dbe6ce61_d9a5a51d-3154-4e94-b981-bf01b103d34c_480x.progressive.jpg?v=1573590455",
		title: "Hellraiser: Inferno",
		genre: "Horror",
		year: 1998,
		price: 7.01,
		stock: 39,
	};

	const miColeccion = collection(firestoreDB, "movies");
	const newDoc = doc(miColeccion);
	setDoc(newDoc, movie).then(() => {
		console.log("Document written with id: ", newDoc.id);
	});
}

export async function createBuyOrder(orderData) {
	const buyTimestamp = Timestamp.now();

	const orderWithDate = {
		...orderData,
		date: buyTimestamp,
	};

	const miColec = collection(firestoreDB, "buyOrders");
	const orderDoc = await addDoc(miColec, orderWithDate);
	console.log("Orden lista con el ID:", orderDoc.id);

	
}

export async function createBuyOrderAndUpdateStock(orderData) {
	const batch = writeBatch();
	const buyTimestamp = Timestamp.now();

	const orderWithDate = {
		...orderData,
		date: buyTimestamp,
	};

	const colecOrders = collection(firestoreDB, "buyOrders");	
	const colecItems = collection(firestoreDB, 'movies')
	const orderDoc = await addDoc(colecOrders, orderWithDate);

	const q = query(colecItems, where(documentId(), 'in', orderData.items.map(el => el.id)))

	getDocs(q).then( res => {
		res.docs.forEach((doc) => {			
			const itemToUpdate = orderData.items.find((prod) => prod.id === doc.id)		
		
			batch.update(doc.ref, {
					stock: doc.data().stock - itemToUpdate.qnty
			})
		})

		batch.commit();		
	});

	const order = await addDoc(colecOrders, orderWithDate)
	console.log("Orden lista con el ID:", order.id);

}
