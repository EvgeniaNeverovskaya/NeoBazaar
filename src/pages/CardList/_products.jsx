import React, { useEffect } from 'react';
import axios from 'axios';
import Cat1 from "../../image/1.jpg";
import Cat2 from "../../image/2.jpg";
import Cat3 from "../../image/3.jpg";
import Cat4 from "../../image/4.jpg";




const products = [
    { id: 1, category: '3D', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 2, category: '3D', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 3, category: '3D', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 4, category: '3D', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 5, category: 'Education', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 6, category: 'Education', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 7, category: 'Education', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 8, category: 'Education', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 9, category: 'Audio', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 10, category: 'Audio', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 11, category: 'Audio', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 12, category: 'Audio', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 13, category: 'Design', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 14, category: 'Design', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 15, category: 'Design', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 16, category: 'Design', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 17, category: 'Drawing-&-Painting', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 18, category: 'Drawing-&-Painting', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 19, category: 'Drawing-&-Painting', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 20, category: 'Drawing-&-Painting', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 21, category: 'Photography', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 22, category: 'Photography', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 23, category: 'Photography', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 24, category: 'Photography', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 25, category: 'Gaming', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 26, category: 'Gaming', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 27, category: 'Gaming', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 28, category: 'Gaming', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id: 29, category: 'Fitness-&-Health', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 30, category: 'Fitness-&-Health', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 31, category: 'Fitness-&-Health', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 32, category: 'Fitness-&-Health', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  
    { id:33, category: 'Software-&-Development', name: "Avatar", userName: "UserName", price: 15, photo: `${Cat1}` },
    { id: 34, category: 'Software-&-Development', name: "Bird", userName: "UserName", price: 30, photo: `${Cat2}` },
    { id: 35, category: 'Software-&-Development', name: "Mouse", userName: "UserName", price: 25, photo: `${Cat3}` },
    { id: 36, category: 'Software-&-Development', name: "Гриб", userName: "UserName", price: 5, photo: `${Cat4}` },
  ];

  export default products;