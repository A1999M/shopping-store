import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FeatureTable from "./FeatureTable";
import AddReview from "./AddReview";
import "./ProTabs.scss";

function ProTabs() {
  return (
    <Tabs defaultActiveKey="Description" id="justify-tab-example">
      <Tab eventKey="Description" title="Description">
        <p className="aboutChoosenPro">
          Nam Tristique Porta Ligula, Vel Viverra Sem Eleifend Nec. Nulla Sed
          Purus Augue, Eu Euismod Tellus. Nam Mattis Eros Nec Mi Sagittis
          Sagittis. Vestibulum Suscipit Cursus Bibendum. Integer At Justo Eget
          Sem Auctor Auctor Eget Vitae Arcu. In Cursus Faucibus Tortor Eu
          Vestibulum. Ut Eget Turpis Ac Justo Porta Varius. Donec Vel Felis
          Ante, Ac Vehicula Ipsum. Quisque Sed Diam Metus.
          <br />
          <br />
          Quisque Eget Leo Sit Amet Erat Varius Rutrum Vitae Dapibus Lectus.
          Vivamus Et Sapien Ante. Suspendisse Potenti. Fusce In Tellus Est, Ac
          Consequat Lacus. Nulla Risus Massa, Commodo In Imperdiet Ut, Ornare In
          Leo. Duis Pellentesque Sagittis Lorem, Sed Mollis Lorem Venenatis Id.
          Diam Metus. Quisque Eget Leo Sit Amet Erat Varius Rutrum Vitae Dapibus
          Lectus. Vivamus Et Sapien Ante. Suspendisse Potenti. Fusce In Tellus
          Est, Ac Consequat Lacus. Nulla Risus Massa, Commodo In
        </p>
      </Tab>
      <Tab eventKey="Additional Information" title="Information">
        <FeatureTable />
      </Tab>
      <Tab eventKey="Reviews" title="Reviews (1)">
        <AddReview />
      </Tab>
    </Tabs>
  );
}

export default ProTabs;
