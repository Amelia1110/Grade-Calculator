'use client'

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons" 

export default function AddButton() {
    return (
        <Button style={{backgroundColor: '#DCB9D1'}} type="primary" shape="circle">
            <PlusOutlined className="text-lg"/>
        </Button>
    )
}