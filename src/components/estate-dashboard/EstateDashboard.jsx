import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { RecentEstatesList } from "./recent-estates-list/RecentEstatesList";
import { getEstateDashboardDetails } from "./helpers/getEstateDashboardDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../actions";
import { getRequest } from "../../http-requests/getRequest";
import "./home.scss";

let EstateDashboard = function (props) {
  const history = useHistory();
  const handleClick = useCallback(
    (obj) => {
      switch (obj.type) {
        case "recquisition":
          history.push("/newcustomer");
          break;
        case "view":
          props.activeRole === "cloud-admin"
            ? history.push("/cloudadmincustomerestatedetails")
            : history.push("/smecustomerestatedetails");
          props.setEstateRequestId(obj.cerId);
          break;
        default:
          return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.activeRole, history]
  );

  const [estateDetails, setEstateDetails] = useState([]);

  let getURL =
    "https://smartcloudautomationfunctionapp.azurewebsites.net/api/GetDBData?" +
    "code=M3jSstm1BiBhtVghQDz45vDr0CbvwGz2ACOu3lxWDw7OeT5uT8rMwg=" +
    "=&cloud_env_request_type=GetCloudAdminDashboardData&cloud_env_request_id=10";

  useEffect(() => {
    getRequest(getURL + (props.activeRole === "sme" ? "1" : "0")).then(
      (response) => {
        if (response !== "error") {
          setEstateDetails(getEstateDashboardDetails(response, handleClick));
        }
      }
    );
  }, [getURL, props.activeRole, handleClick]);

  return (
    <div className="home">
      <div className="home__content">
        <div className="cart-icons">
          <FontAwesomeIcon
            icon={icons.faCartPlus}
            className="cart-icon"
            style={{ marginRight: "10px" }}
            title="Go to Customer Recquisition Form"
            onClick={() => handleClick({ type: "recquisition" })}
          />
        </div>
        <RecentEstatesList recentEstates={estateDetails} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeRole: state.activeRole,
});

const mapDispatchToProps = (dispatch) => ({
  setEstateRequestId: (estateRequestId) =>
    dispatch(actions.setEstateRequestId(estateRequestId)),
});

EstateDashboard = connect(mapStateToProps, mapDispatchToProps)(EstateDashboard);
export default EstateDashboard;
