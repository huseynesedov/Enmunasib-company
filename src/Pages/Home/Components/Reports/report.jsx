import React, { useState, useEffect } from "react";
import { Badge, DatePicker, notification, Space } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const Reports = () => {
    const minStartDate = dayjs("2025-01-02T00:00");
    const [dates, setDates] = useState([minStartDate, dayjs().endOf("month")]);

    const openNotification = (message) => {
        notification.error({
            message: "Invalid Date",
            description: message,
            duration: 2,
        });
    };

    const handleRangeChange = (values) => {
        if (!values) return;

        const [start, end] = values;
        if (start.isBefore(minStartDate)) {
            openNotification(`Date cannot be earlier than ${minStartDate.format("YYYY-MM-DD HH:mm")}`);
            setDates([minStartDate, end]);
        } else {
            setDates([start, end]);
        }
    };

    const reports = [
        { label: "Xərclər", value: "1000 manat", className: "text_red" },
        { label: "Borc", value: "0 manat", className: "text_yellow" },
        { label: "Net qazanc", value: "1000 manat", className: "text_green" },
        { label: "Tərəfdaşların qazancı", value: "1000 manat", className: "text_green" },
        { label: "Ödənilmiş məbləğ", value: "1000 manat", className: "text_green" },
    ];

    return (
        <div className="d-flex flex-column">
            <div className="thon_home_datepickersMain d-flex align-items-center">
                <div className="thon_home_datepickers">
                    <Space>
                        <RangePicker
                            showTime
                            value={dates}
                            onChange={handleRangeChange}
                            format="YYYY-MM-DD HH:mm"
                            disabledDate={(current) => current && current.isBefore(minStartDate, "minute")}
                        />
                    </Space>
                </div>
            </div>

            <div className="thon_home_reports col mt-3 d-flex">
                {reports.map((report, index) => (
                    <div key={index} className="thon_home_reportContainer">
                        {report.label === "Borc" ? (
                            <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: '-23px -30px' }}>
                                <div className="fs-14 fw-600 text-center disabled-btn" style={{ padding: "", background: "#fff", borderRadius: 4 }}>
                                    <p className="fs-18 text-center">{report.label}</p>
                                    <p className={`fs-14 fw-600 ${report.className}`}>{report.value}</p>
                                </div>
                            </Badge.Ribbon>
                        ) : (
                            <>
                                <p className="fs-18 text-center">{report.label}</p>
                                <p className={`fs-14 fw-600 ${report.className}`}>{report.value}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;

