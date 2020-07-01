import React,{useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Button } from "react-bootstrap";
export default function Tableinduction() {
  const [selected,setSelected]=useState([]);
  const [selectedall,setSelectedall]=useState(false);

  const Product = [
    { id: "1" },
    { id: "2" },
    { id: "3"},
    { id: "4"},
    { id: "5" },
    { id: "6"},
    { id: "7" },
    { id: "8" },
    { id: "9"},
    { id: "10"},
    { id: "11"},
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
  ];
  const columns = [
    {
      dataField: "id",
      text: "ID"
    },
 
  ];
  const selectRow = {
    mode: 'checkbox',
    bgColor: "#d9dcf8bd",
    clickToSelect: true,
    onSelectAll: (isSelect, rows, e) => {
    console.log(isSelect)
    if (isSelect) {
      //map row    idเก็บ ไว้ใน newSelecteds

      const newSelecteds = rows.map(n => n.id);
      //console.log(newSelecteds) ;
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
    },
    onSelect: (row, isSelect, rowIndex, e) => {
    console.log(isSelect)
    const selectedIndex = selected.indexOf(row.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    }
  };
  const Count =()=>{
    const count =selected.length;
    return(
      <div>จำนวนรายการ:{count} </div>
    );
  }
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      รายการที่ { from } ถึง { to } ทั้งหมด { size }
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: Product.length
    }] 
    
  };

  return (
    <div className="container-fluid">
      {Count()}
      <BootstrapTable
        keyField="id"
        data={Product}
        selectRow={selectRow}
        columns={columns}
        pagination={paginationFactory(options)}
      />

      <Button color="primary" onClick={()=>console.log(selected)}>Click</Button>
    </div>
  );
}
