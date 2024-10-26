import React, { useState } from "react";
import { DatePicker, Select, Space } from 'antd';
const { RangePicker } = DatePicker;

const SearchBar = () => {
  const [hotel, setHotel] = useState("");
  const [hotelOptions, setHotelOptions] = useState([
    {
      value: 'هتل : ائل گلی تبریز',
      label: 'هتل : ائل گلی تبریز',
    },
    {
      value: 'هتل : پارس کرمان',
      label: 'هتل : پارس کرمان',
    },
    {
      value: 'شهر : تهران',
      label: 'شهر : تهران',
    },
  ]);
  
  const onSearchHotel = () => {};

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 px-8 pb-4 bg-white shadow-md items-center">
      {/* Hotel Destination Input */}
      <Select
        showSearch
        placeholder="مقصد یا هتل"
        optionFilterProp="label"
        onChange={(value) => setHotel(value)}
        onSearch={onSearchHotel}
        options={hotelOptions}
        size="large"
        className="w-full sm:w-auto"
      />

      {/* Date Picker for Check-In and Check-Out */}
      <Space direction="vertical" size={12} className="w-full sm:w-auto">
        <RangePicker
          picker="date"
          style={{ width: '100%' }}
          placeholder={["تاریخ ورود", "تاریخ خروج"]}
          showTime={false}
          format="YYYY-MM-DD"
          className="p-2 w-full"
          separator=" تا "
        />
      </Space>

      {/* Number of Guests Input */}
      <Select
        showSearch
        placeholder="مهمانان"
        optionFilterProp="label"
        onChange={(value) => setHotel(value)}
        onSearch={onSearchHotel}
        options={hotelOptions}
        size="large"
        className="w-full sm:w-auto"
      />

      {/* Search Button */}
      <button className="w-full sm:w-auto bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
        جستجو
      </button>
    </div>
  );
};

export default SearchBar;
