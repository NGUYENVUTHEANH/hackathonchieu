import React, { useState } from "react";
import "./Shopping.css";

function Shopping() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);

    const shoppings = [
        {
            "name": "BST 50 - Áo thun nam",
            "price": "100",
            "description": "Áo thun form rộng vải dày mịn logo cá tính cách điệu",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp1.jfif5c29ba45-be68-4381-8ae9-42ddfc1b4135?alt=media&token=fc203279-226a-4b55-aee9-d42ccaba382a",
            "id": 1
        },
        {
            "name": "Áo thun tay lỡ ",
            "price": "150",
            "description": "SADTAGRAM unisex nam nữ form rộng vải dày mịn",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp5.jfif72209208-1024-41fd-a631-4d2e3a161d13?alt=media&token=0ec0e2e1-7b72-405e-96ef-ff3e2da0fa0f",
            "id": 2
        },
        {
            "name": "Áo thun phông nam ",
            "price": "200",
            "description": "Áo thun phông nam nâu xám local brand BEEYANBUY \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp2.jfife8a16bc6-4b7b-4274-a8ba-a436602c8f4c?alt=media&token=170c1a60-d08e-4a90-918c-ca8ffda155d5",
            "id": 3
        },
        {
            "name": "Đồ bộ quần áo thun  ",
            "price": "400",
            "description": "Đồ bộ quần áo thun chất liệu tổ ong cao cấp \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp3.jfifa57042ca-f8fa-4beb-8d4d-35680bd06356?alt=media&token=6d375504-e950-4f73-aa50-7fabbeb7b098",
            "id": 4
        },
        {
            "name": "Áo ba lỗ nam Guzado Tanktop ",
            "price": "125",
            "description": "Áo ba lỗ nam Guzado  thể thao\n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp4.jfifd9a07b88-12c8-4b63-ab27-c42630049259?alt=media&token=ec24c6c2-e1bb-4eeb-ba63-031d1c20fa22",
            "id": 5
        },
        {
            "name": "Quần đùi nam Guzado GMSR05 ",
            "price": "250",
            "description": "Quần đùi nam Guzado GMSR05 \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp6.jfifa45d18ae-0a2c-4cac-85d2-2cd5e058ccd5?alt=media&token=6ae7efbc-5134-4336-9a78-4b884966fdca",
            "id": 6
        },
        {
            "name": "Bộ quần áo thể thao nam đẹp ",
            "price": "500",
            "description": "Bộ quần áo thể thao nam cao cấp \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp7.jfifaa927bcb-fa59-4533-8d83-1adce771c77d?alt=media&token=a7a58d52-d3c3-44e4-83f8-920baaa1ef14",
            "id": 7
        },
        {
            "name": "Bộ quần áo thể thao nam ROUGH ",
            "price": "450",
            "description": "Bộ quần áo thể thao nam ROUGH \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp8.jfif22d4493f-459d-46b3-8345-e0c95eadcd59?alt=media&token=2b30583e-eeaf-45c2-85ee-71890a9b1d39",
            "id": 8
        },
        {
            "name": "Áo sơ mi dài tay Unisex ",
            "price": "290",
            "description": "Áo sơ mi nam nữ Unisex Basic \n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp9.png7d52c352-b08f-44c0-81bb-272052c47633?alt=media&token=4bff2837-34b6-491e-8e70-e5395848a0fd",
            "id": 9
        },
        {
            "name": "Áo sơ mi trắng trơn  unisex",
            "price": "350",
            "description": "Áo sơ mi trắng trơn unisex dài tay\n",
            "status": true,
            "image_url": "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp10.jfif84d71d7a-d55f-43a7-af0c-24b321e85c63?alt=media&token=238f7824-ab0f-409b-ba18-252ce3495331",
            "id": 10
        }
    ]

    const handleHomeClick = () => {
        setCurrentPage('home');
    };

    const handleCartClick = () => {
        setCurrentPage('cart');
    };

    const addToCart = (shopping) => {
        setCart((prevCart) => [...prevCart, shopping]);
    };

    const updateQuantity = (shopping, quantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === shopping.id) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeshopping = (shopping) => {
        const updatedCart = cart.filter((item) => item.id !== shopping.id);
        setCart(updatedCart);
    };

    const editshopping = (shopping) => {
        // Logic chỉnh sửa sản phẩm trong giỏ hàng
    };

    const getTotalAmount = () => {
        return cart.reduce(
            (total, shopping) => total + shopping.price * shopping.quantity,
            0
        );
    };

    return (
        <div>
            <div className="container-title">
                <h1 onClick={handleHomeClick}>Home</h1>
                <h1 onClick={handleCartClick}>Cart</h1>
            </div>
            <hr />
            {currentPage === 'home' ? (
                <div className="list-shoppings">
                    <h2>List-shoppings</h2>
                    <div className="shoppingS">
                        {shoppings.map((shopping, index) => (
                            <div className="shopping-item" key={shopping.id}>
                                <span className="shopping-index">{index + 1}</span>
                                <img className="shopping-image" src={shopping.image_url} alt="" />
                                <h2 className="shopping-name">{shopping.name}</h2>
                                <p className="shopping-description">{shopping.description}</p>
                                <p className="shopping-price">{shopping.price}</p>
                                <div className="input-group">
                                    <input
                                        className="input-group2"
                                        placeholder="0"
                                        type="number"
                                        value={shopping.quantity || 0}
                                        onChange={(e) =>
                                            updateQuantity(shopping, parseInt(e.target.value))
                                        }
                                    />
                                    <button onClick={() => addToCart(shopping)}>Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <h1>Cart</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th className="stt">STT</th>
                                <th className="name">Name</th>
                                <th className="image">Img</th>
                                <th className="quantity">Quantity</th>
                                <th className="price">Price</th>
                                <th className="amount">Total Amount</th>
                                <th className="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((shopping, index) => (
                                <tr key={shopping.id}>
                                    <td>{index + 1}</td>
                                    <td>{shopping.name}</td>
                                    <td>
                                        <img className="shopping-image2" src={shopping.image_url} alt="" />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={shopping.quantity || 0}
                                            onChange={(e) =>
                                                updateQuantity(shopping, parseInt(e.target.value))
                                            }
                                        />
                                    </td>
                                    <td>{shopping.price}</td>
                                    <td>{shopping.price * shopping.quantity || 0}</td>
                                    <td>
                                        <button className="action2" onClick={() => removeshopping(shopping)}>
                                            Remove
                                        </button>
                                        <button className="action3" onClick={() => editshopping(shopping)}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h3>Total Amount: {getTotalAmount()}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shopping;
