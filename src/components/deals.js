import "../styles/deals.scss";

const Deals = () => {
    return (
        <div className="deals">
            <div className="watches">
                <h3>Porto Watches</h3>
                <p><s>20%</s> <h2> 30% </h2> OFF</p>
                <button>SHOP NOW</button>
            </div>

            <div className="promos">
            <p>
                <h4>
                    <span>50</span>
                    <sup>%
                        <small>OFF</small>
                    </sup>
                </h4>
                <h4>
                    <span>70</span>
                    <sup>%
                        <small>OFF</small>
                    </sup>
                </h4>
            </p>
            <div>
                <span>
                    <h3>DEAL PROMOS</h3>
                    <p>STARTING AT 99$</p>
                </span>
                <button>SHOP NOW</button>
            </div>
            <h4>
                    <span>30</span>
                    <sup>%
                        <small>OFF</small>
                    </sup>
                </h4>
            </div>

            <div className="bags">
                <h3>Handbags</h3>
                <p>STARTING AT $99</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Deals;