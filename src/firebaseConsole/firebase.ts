import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC7EHqWjhU-CWRg2tZzSYPk6z0kcGbfBBk",
    authDomain: "altatest-de26a.firebaseapp.com",
    projectId: "altatest-de26a",
    storageBucket: "altatest-de26a.appspot.com",
    messagingSenderId: "586892856883",
    appId: "1:586892856883:web:3eba4336109152c610dd46",
    measurementId: "G-Z9M4V28N9E"
}; // Đoạn mã cho đối tượng Config của ứng dụng liên kết với Firebase

const app = initializeApp(firebaseConfig); // Khởi tạo Firebase
const db = getFirestore(app); // Liên kết với fire store

export const dataPending = async () => {
    const datasCol = collection(db, 'todos'); // Truy cập vào collection 'todos'
    const dataSnapshot = await getDocs(datasCol); // Lấy data từ dữ liệu trả về trong .docs
    const dataList = dataSnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }) ); // Xử lý data nhận được
    return dataList; // Data trả về có dạng [{name:__, done:__, id:__},{}]
}; // Lấy dữ liệu từ fire store