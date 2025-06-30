const Things = [
  {
    id: 1,
    Name: "Gtx 1050Ti",
    price: "200$",
    category: "graphicsCard",
    image:
      "https://static.gigabyte.com/StaticFile/Image/Global/efdff9ff77fe698d8ebef0742911f200/Product/15996/Png",
  },
  {
    id: 2,
    Name: "AMD RX 580",
    price: "180$",
    category: "graphicsCard",
    image:
      "https://asset.msi.com/resize/image/global/product/product_10_20170412100614_58ed8b96d59e6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  },
  {
    id: 3,
    Name: "Rtx 5090",
    price: "900$",
    category: "graphicsCard",
    image:
      "https://asset.msi.com/resize/image/global/product/product_17370916201066862fdd40c1684b21efd85a394ab1.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  },
  {
    id: 4,
    Name: "Air Jordan 7",
    price: "4200$",
    category: "shoes",
    image: "https://cdn.media.amplience.net/i/hibbett/DSC03446%20copy",
  },
  {
    id: 5,
    Name: "Nike Spike",
    price: "800$",
    category: "shoes",
    image:
      "https://i0.wp.com/footwearmagazine.com/wp-content/uploads/2024/03/nike-mag.jpg?fit=900%2C600&amp;ssl=1",
  },
  {
    id: 6,
    Name: "Pork",
    price: "20$",
    category: "meat",
    image:
      "https://www.allrecipes.com/thmb/gbMu9ffS-EnGHt1yShdmfVjzD5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14726-grilled-pork-tenderloin-beauty-3x4-f4efabb5032f464dae47fe4ee57690da.jpg",
  },
  {
    id: 7,
    Name: "Beef",
    price: "35$",
    category: "meat",
    image:
      "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltf4cb5779230dd1c0/66707b504909b4d691eaca3f/cuts-of-beef-chuck.jpeg?q=70&width=3840&auto=webp",
  },
  {
    id: 9,
    Name: "Chicken Breast",
    price: "10$",
    category: "meat",
    image: "https://assets-jpcust.jwpsrv.com/thumbnails/4Bjx60lU-1280.jpg",
  },
  {
    id: 10,
    Name: "Intel i9 CPU",
    price: "600$",
    category: "cpu",
    image:
      "https://storage-asset.msi.com/event/2022/cnd/intel-13th-gen-gaming-desktop/images/img-intel-core-i9.jpg",
  },
  {
    id: 11,
    Name: "Ryzen 7 5800X",
    price: "400$",
    category: "cpu",
    image: "https://media.overclock3d.net/2023/09/Ryzen-5000-Image.jpg",
  },
];

import { useState } from 'react';

export function Product() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter items based on selected category
   

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
      <>
      <div id='selectionDiv'>
        
        <label htmlFor="selection">Select The Category to view items : </label>
        <select
          name="Sort"
          id="selection"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="graphicsCard">Graphics Card</option>
          <option value="shoes">Shoes</option>
          <option value="meat">Meat</option>
          <option value="cpu">CPUs</option>
        </select>
            </div>
        <div className="Totalbox">
          {(selectedCategory === "all" ? Things : Things.filter((item) => item.category === selectedCategory)
          ).map((item) => (
            <div key={item.id} className="eachBorder">
              <div className="image">
                <img src={item.image} alt={item.Name} />
              </div>
              <br />
              Item: {item.Name}{" "}
              <br />
              <br />
              Price: {item.price}{" "}
            </div>
          ))}
        </div>
      </>
    );
}
