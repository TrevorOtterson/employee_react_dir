import React, { context } from "react";
import DataBody from "../DataBody";

const DataTable = () => {
    return (
        <div className="datatable mt-4">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <DataBody />
            </table>
        </div>
    )
}

export default DataTable;