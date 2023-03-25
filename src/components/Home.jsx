import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/0552/7211/2212/files/Get-free-gift-02_Desktop_2200x.jpg?v=1679461156"
              class="d-block w-100"
              alt="..."
              height="560px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/collection_e7978f42-f7cf-479e-be39-d219f634396e_1280x.jpg?v=1676550735"
              class="d-block w-100"
              alt="..."
              height="560px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
              class="d-block w-100"
              alt="..."
              height="560px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="thirdsection">
        <div>
          <p>
            Cureveda Was conceptualized to deliver 100o vegetarian, as close to
            nature, non-prescription formulas driven by innovation & clinical
            validation. Inheriting a 100 year old legacy in herbal research
            enables us to develop a range especially suited for Indian needs
            while being globally competitive in safety & performance
          </p>
        </div>
        {/* <div className='grid'>
  <div>fd</div>
  <div>fds</div>
  <div>fd</div>
  <div>dsa</div>
  </div> */}
        <div id="grid">
          <div id="areaA">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
              alt=""
              height={"38px"}
              width={"50px"}
            />
            <p>GMP.ISO & Non GMO</p>
          </div>
          <div id="areaB">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
              alt=""
              height={"38px"}
              width={"50px"}
            />
            <p>GMP.ISO & Non GMO</p>
          </div>
          <div id="areac">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
              alt=""
              height={"38px"}
              width={"50px"}
            />
            <p>GMP.ISO & Non GMO</p>
          </div>
          <div id="aread">
            <img
              src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
              alt=""
              height={"38px"}
              width={"50px"}
            />
            <p>GMP.ISO & Non GMO</p>
          </div>
        </div>

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/AboutUs">
            <button
              style={{
                borderRadius: "30px",
                padding: "5px 10px",
                backgroundColor: "#546328",
                color: "white",
              }}
            >
              know more
            </button>
          </Link>
        </div>
      </div>

      <div
        className="productssection"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
            <h5 className="card-title">product</h5>
            <p className="lead">Rs. 100</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/skincare_basics_for_outdoor_lifestyle_oily_to_combination_skin_394x.jpg?v=1581153497"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
            <h5 className="card-title">product</h5>
            <p className="lead">Rs. 100</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Elixir_15_ml_394x.jpg?v=1581152553"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
            <h5 className="card-title">product</h5>
            <p className="lead">Rs. 100</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Blemish_control_normal_to_dry_394x.jpg?v=1600324123"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
            <h5 className="card-title">product</h5>
            <p className="lead">Rs. 100</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Featured In</h1>
          <h5>Improving health with ayurvedha</h5>
          <h1>2 M +</h1>
        </div>
      <div class="marquee-wrapper">
        <div class="marquee">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLcpUuyU1n0ad1uHzl3U3JIMMFVXfrxTGjw&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf5_hMcfy6per8SPxSmOEvjN44i6Xsrf1LQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdadwYL-DJsRdv_BQH-hFAZIDk5RKSm328JQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXu3b9vIxTyRsxp2JYM4Jy_MuN9LL507Erg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhi6yQL4TNHAEv3CF6Ov-WJ3tiMvkHKkWmV3paXYdEdaBT4CQXvFvMt53XYFRY35y-xE&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqFne46xJ_v1S9qFiVUC_2u96rff9-NrMGw&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72_0P4vIUB3jjscoRCE15-GwyqmmwYF2n2g&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkvdNPOzbDGdEbOqS3U-MCcmApeNqXukLcZTJ_nfhzgYsrDDiOb71vLWdZ3XbYr2m05s&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCLA9bcxSfYgdAvlcs_9fe8sPLkuQSZFL_vFvhL-ukK5ok16nNoEuakOEmzZ09WuRQ6M&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppnERgl7MXvXn0WtGMeyCO3i5dKXYvr2L5g&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv96F9IWY0761b6NSrGvwjZFsJrw0Q8VXo0A&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88CW0--r7jloI4jjMijOonbdYtXRv-A0gCQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrw6oni9vi2TUBI8ZKOlb-BTFceFweSpmRg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqqEH7fqndlV_lXyF3kqXyNGj4T3rl87j3Q&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRd50H6ST2eEdxO_6Y3QTso8GSX41o35DrA&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQVo71ylaz-Bpt-lmrn-2_Lqk4GLuoo_D1g&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jQNRcHBThPY5TSDQtV0zDCLPpoE-hSPvyA&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFAW1AiXZ1HahyUprLRNsc16yVd5EYDq4yL6WCGkgqIKCUrQ13VhvycF9MTqZKMOXE7s&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xYvp5TXHNX06EjDM1kLfCTXp-dHAJdyrKg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xYvp5TXHNX06EjDM1kLfCTXp-dHAJdyrKg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88CW0--r7jloI4jjMijOonbdYtXRv-A0gCQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzdQr-UNJaVbLIeB3YaR0r2suZvamCmYhBg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP_boTMW5M0zNHulpDcGSOND5YBVkEI-HDg&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GpZFveJj8x1DClzOXBPzMbbTnTkxiiO3Ng&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GpZFveJj8x1DClzOXBPzMbbTnTkxiiO3Ng&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRUY97EZ9nz8g1tZ3uP4gExEUEuNzKNfMBVT19uiHfUJXhhBPta_rKlpofia7MEeH9Zs&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPTkYy365qlFwuvwnY1lSg8jrIxiIn1wpqQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsq8rXL47dazWOH38wtDwk-cyVR25XuLxDIA&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_AXL-iTtmoBPrZqz0AlBEzeQkY1O8iVdJw&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIHMLFOCAnMYQCs3mmZi_8XPomLsr9_TzXQ&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcD0WpHfucsJjlQjfpV9DCB3kQqtfeGz2hw&usqp=CAU" alt="" />

        </div>
      </div>
      </div>



      <div className="awards" >
    <h1>Winers of the Most Prestigious  </h1>
    <h3>Health Awards</h3>
    <div style={{display:"flex",justifyContent:'space-around',width:"80%",margin:'auto' }}>
    <div className="card my-5 py-4" style={{ width: " 18rem" ,}}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O56wT9shn3BzWwLMOYsjusJjLgskQhC_Bw&usqp=CAU"
            className="card-img-top"
            alt="img"
          />
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcWVbgKANL_smNXarxvSKTKdS-y0h_98T3w&usqp=CAU"
            className="card-img-top"
            alt="img"
          />
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="data:image/jpeg;base64,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"
            className="card-img-top"
            alt="img"
          />
        </div>
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O56wT9shn3BzWwLMOYsjusJjLgskQhC_Bw&usqp=CAU"
            className="card-img-top"
            alt="img"
          />
        </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
