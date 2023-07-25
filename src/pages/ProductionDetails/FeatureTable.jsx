import "./FeatureTable.scss";

function FeatureTable() {
  return (
    <div className="wrapperTable">
      <ul className="leftTable">
        <li className="leftTableItems">Length</li>
        <li className="leftTableItems">Fit</li>
        <li className="leftTableItems">Composition</li>
        <li className="leftTableItems">Concept</li>
        <li className="leftTableItems">Date of manufacture</li>
      </ul>
      <ul className="rightTable">
        <li className="rightTableItems">Regular length</li>
        <li className="rightTableItems">Relaxed fit</li>
        <li className="rightTableItems">Shell:Cotton 60%, Polyester 40%</li>
        <li className="rightTableItems">Basics</li>
        <li className="rightTableItems">N/A</li>
      </ul>
    </div>
  );
}

export default FeatureTable;
