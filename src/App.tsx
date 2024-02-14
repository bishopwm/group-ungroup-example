import * as React from "react";
import ReactDOM from "react-dom";

function App() {
  const { board } = window.miro;

  let items;

  const handleGrouping = async () => {
    const selectedItems = await board.getSelection();
    items = selectedItems;
    const groupedItems = await board.group({ items: items });
    return groupedItems;
  };

  const handleUngrouping = async () => {
    console.log("ungroup");
    const boardItems = await board.get({
      type: ["group"],
    });
    console.log(boardItems[0]);
    await boardItems[0].ungroup();
  };

  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12">
        <p className="p-medium">
          Group and ungroup board items using the{" "}
          <a href="https://developers.miro.com/docs/websdk-reference-group">
            group/ungroup methods
          </a>{" "}
          in the Miro Web SDK.
        </p>
      </div>
      <div className="cs1 ce12">
        <button className="button button-primary" onClick={handleGrouping}>
          Group Selection
        </button>
      </div>
      <div className="cs1 ce12">
        <button className="button button-primary" onClick={handleUngrouping}>
          Ungroup Selection
        </button>
      </div>
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
