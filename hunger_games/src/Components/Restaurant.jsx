import { useState, useEffect } from "react";
import "../App.css";
import DBJSON from "../data.json";
import axios from "axios";
import { Pagination } from "./Pagination";

export const Restaurant = () => {
  // total obj in array.

  const { restaurant } = DBJSON;
  const initialData = restaurant || [];
  const [data, setData] = useState(initialData);
  const [showall, setShowall] = useState(initialData);
  const [item, setItem] = useState([]);
  const [filterState, setFilterState] = useState({
    method: "all",
    rating: 1,
  });
  const [sortByRating, setSortByRating] = useState(false);

  // single obj initial state
  const initialState = {
    username: "",
    address: "",
    payment_methods: {
      card: false,
      cash: false,
      upi: false,
      all: true,
    },
    votes: "",
    reviews: "",
    image: "",
    costforone: "",
    min: "",
    address1: "",
    rating: "all",
  };

  const [formData, setformData] = useState(initialState);

  const handlesubmit = (e) => {
    e.preventDefault();
    const showalladata = () => {
      return [...data, formData];
    };
    setData(showalladata);
    setShowall(showalladata);
  };
  console.log(showall);

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;

    const payment_methods = {
      card: false,
      cash: false,
      upi: false,
    };

    payment_methods[value] = true;

    setformData((prevState) => ({
      ...prevState,
      payment_methods,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "name", value, "value");

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sortByRatingFunc = () => {
    setSortByRating((prev) => !prev);
  };

  const getCorrectPaymentMethod = (obj) => {
    for (let key in obj) {
      if (obj[key]) return key;
    }
  };
  const handlesorting = (rate) => {
    setFilterState({ ...filterState, rating: rate });
  };

  const handlepayment = (method) => {
    setFilterState({ ...filterState, method });
  };
  function getRestaurant() {
    fetch("http://localhost:3000/restaurant")
      .then((data) => data.json())
      .then((data) => {
        setFilterState(data);
        console.log(data);
      });
  }



  useEffect(() => {
    const filterSearch = () => {
      const { method, rating } = filterState;
  
      let filteredArr = showall.filter((item) => {
        let newitem = item.payment_methods[method] && item.rating >= rating;
        return newitem;
      });
  
      filteredArr = filteredArr.sort((a, b) =>
        sortByRating ? b.rating - a.rating : a.rating - b.rating
      );
      setData(filteredArr);
    };
    filterSearch();
  }, [filterState, showall, sortByRating]);

  const {
    username,
    address,
    votes,
    reviews,
    image,
    costforone,
    rating,
    min,
  } = formData;

  console.log(filterState, "filterState filterState");

  return (
    <div className="container">
      <form className="mt-5" 
      onSubmit={(e) => {
        e.preventDefault();
        const data = formData;
  
        axios
          .post("http://localhost:3000/restaurant", data)
          .then(() => {
            getRestaurant();
          })
          .catch((err) => {
            console.log("err", err);
          });
       
      }}>
        <legend>Restaurant Details</legend>
        <div class="mb-2">
          <label>User name</label>
          <input
            type="text"
            class="form-control form-control-sm"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div class="mb-2">
          <label>Address</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={address}
            name="address"
          />
        </div>

        <div class="mb-2">
          <label>Image</label>
          <input
            name="image"
            value={image}
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
          ></input>
        </div>

        <div class="mb-2">
          <label>Reviews</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={reviews}
            name="reviews"
          />
        </div>
        <div class="mb-2">
          <label>Votes</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={votes}
            name="votes"
          />
        </div>
        <div class="mb-2">
          <label>Cost For One</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={costforone}
            name="costforone"
          />
        </div>
        <div class="mb-2">
          <label>Rating</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={rating}
            name="rating"
          />
        </div>
        <div class="mb-2">
          <label>Min Amount</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={min}
            name="min"
          />
        </div>

        <div class="mb-2">
          Payment Method:{""}
          <select
            name="payment_methods"
            class="form-control form-control-sm"
            onChange={handlePaymentMethodChange}
          >
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <div class="mb-2">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            onClick={handlesubmit}
          >
            ADD RESTAURANT
          </button>
        </div>
      </form>
      <br />
    
      <h5 className="sortrating">SORT BY RATINGS</h5>
      <div className="stars">
        
        <button
          className={`${filterState.rating === 4 ? "isActive" : "isnotactive"}`}
          onClick={(e) => {
            handlesorting(4);
          }}
        >
          4 Star
        </button>
        <button
          className={`${filterState.rating === 3 ? "isActive" : "isnotactive"}`}
          onClick={(e) => {
            handlesorting(3);
          }}
        >
          3 Star
        </button>
        <button
          className={`${filterState.rating === 2 ? "isActive" : "isnotactive"}`}
          onClick={(e) => {
            handlesorting(2);
          }}
        >
          2 Star
        </button>
        <button
          className={`${
            filterState.rating === 1 ? "isnotactive" : "isnotactive"
          }`}
          onClick={(e) => {
            handlesorting(1);
          }}
        >
          1 Star
        </button>
        <button
          className={`${
            filterState.rating === "" ? "isActive" : "isnotactive"
          }`}
          onClick={(e) => {
            handlesorting("");
          }}
        >
          All
        </button>
      </div>
      
      <h5 className="sortrating">SORT BY PAYMENT</h5>
      <div className="payment">
        <button
          className={`${
            filterState.method === "card" ? "isActive" : "isnotactive"
          }`}
          onClick={() => {
            handlepayment("card");
          }}
        >
          Card Payment
        </button>
        <button
          className={`${
            filterState.method === "cash" ? "isActive" : "isnotactive"
          }`}
          onClick={() => {
            handlepayment("cash");
          }}
        >
          Cash Payment
        </button>
        <button
          className={`${
            filterState.method === "upi" ? "isActive" : "isnotactive"
          }`}
          onClick={() => {
            handlepayment("upi");
          }}
        >
          UPI Payment
        </button>
        <button
          className={`${
            filterState.method === "all" ? "isActive" : "isnotactive"
          }`}
          onClick={() => {
            handlepayment("all");
          }}
        >
          All
        </button>
      </div>
      <h5 className="sortrating">SORT</h5>
      <div className="sort">
     
        <button
          className={`${sortByRating ? "isActive" : "isnotactive"}`}
          onClick={sortByRatingFunc}
        >
          {sortByRating ? "High to Low rating" : "Low to High rating"}
        </button>
      </div>

      <div>
        {data.map(
          ({
            username,
            address,
            payment_methods,
            votes,
            reviews,
            image,
            costforone,
            rating,
            min,
          }) => {
            const getPaymentmethod = getCorrectPaymentMethod(payment_methods);

            return (
              <div className="all">
                <div className="flexx">
                  <div className="shadoww">
                    <div className="Rest">
                      <div>
                        {" "}
                        <img src={image} alt=""  width="100%" />
                      </div>
                      <div>
                        <h5 className="name">{username}</h5>
                        <h5 className="add">{address}</h5>
                        <h5 className="add">Cost ₹{costforone} for one</h5>
                        <div className="list">
                          <h5>Min ₹{min} </h5>
                         
                          <li className="upto">Upto 30 min</li>
                        </div>
                       
                      </div>
                      <div>
                      <h5>Accept {getPaymentmethod} payment only</h5>
                        <h6 className="rating">{rating}</h6>
                        <h6 className="add">{votes} votes</h6>
                        <h6 className="add"> {reviews} reviews</h6>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
     
    </div>
  );
};
