import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from 'firebase/firestore/lite'

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
	const miColec = collection(firestoreDB, 'movies');
	// obtenemos todos los items
	/* getDocs(miColec).then( result => miVariable = result  */
	const moviesSnap = await getDocs(miColec);

	return moviesSnap.docs.map(doc => {
		return {
			...doc.data(),
			id: doc.id
		}
	});
}

// obtener todos los items de una categoria
export async function getItemsByCategory(categoryId) {
	// obtenemos la referencia a la coleccion de items
	const miColec = collection(firestoreDB, 'movies');
	const queryMovie = query(miColec, where("genre", "==", categoryId));

	const moviesSnap = await getDocs(queryMovie);

	return moviesSnap.docs.map(doc => {
		return {
			...doc.data(),
			id: doc.id
		}
	});
}

//obtener un solo item segun el ID para pasar a Item Detail
export async function getItem(id){
	const miColec = collection(firestoreDB, 'movies');
	const movieRef = doc(miColec, id);
	const movieSnap = await getDoc(movieRef);

	return { ...movieSnap.data(), id: movieSnap.id };
}