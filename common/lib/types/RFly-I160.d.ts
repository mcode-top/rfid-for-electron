/**@name 标签应用指令码 */
export declare enum RFlyI160Code {
    /**@name 单次盘点标签 */
    SingleInventory = 1,
    /**@name 时间段盘点标签 */
    TimeInventory = 2,
    /**@name 写标签数据 */
    WriteTagData = 3,
    /**@name 读标签数据 */
    ReadTagData = 4,
    /**@name 锁标签 */
    LockTag = 5,
    /**@name 杀死标签 */
    KillTag = 6,
    /**@name 块写标签数据 */
    BlockWriteTagData = 7,
    /**@name 块擦除 */
    BlockErase = 8,
    /**@name 连续盘点标签 */
    ContinuousInventory = 17,
    /**@name 停止连续盘点 */
    StopContinuousInventory = 18,
    /**@name 载波控制 */
    CarrierControl = 32,
    /**@name 连续盘点标签指定区域数据 */
    ContinuousInventorySpecifiedAreaData = 161,
    /**@name 时间段盘点标签指定区域数据 */
    TimeInventorySpecifiedAreaData = 162,
    /**@name 连续盘点标签并写入指定区域数据 */
    ContinuousInventoryAndWriteSpecifiedAreaData = 163,
    /**@name 时间段盘点标签并写入指定区域数据 */
    TimeInventoryAndWriteSpecifiedAreaData = 164,
    /**@name 天线设置 */
    SetAntenna = 65,
    /**@name 功率设置 */
    SetPower = 66,
    /**@name 调频表设置 */
    SetFrequencyHoppingTable = 67,
    /**@name 区域设置 */
    SetRegion = 68,
    /**@name Gen2协议设置 */
    SetGen2 = 69,
    /**@name 波特率更改 */
    SetBaudRate = 80,
    /**@name GPIO设置 */
    SetGPIO = 81,
    /**@name 保存设置 */
    SaveSettings = 95,
    /**@name 获取版本号 */
    GetVersion = 112,
    /**@name 获取天线 */
    GetAntenna = 113,
    /**@name 获取功率 */
    GetPower = 114,
    /**@name 获取跳频表 */
    GetFrequencyHoppingTable = 115,
    /**@name 获取区域 */
    GetRegion = 116,
    /**@name 获取Gen2协议 */
    GetGen2 = 117,
    /**@name 获取GPIO状态 */
    GetGPIO = 129,
    /**@name 获取温度 */
    GetTemperature = 144,
    /**@name 获取SN码 */
    GetSN = 145
}
/**@name 标签应用返回的状态码 */
export declare enum RFlyI160Status {
    /**@name 成功 */
    STATUS_SUCCESS_CODE = 0,
    /**@name 发送数据太大 */
    FAULT_MSG_WRONG_NUMBER_OF_DATA = 16,
    /**@name 无效操作码 */
    FAULT_INVALID_OPCODE = 17,
    /**@name 未实现的操作码 */
    FAULT_UNIMPLEMENTED_OPCODE = 18,
    /**@name 功率太高 */
    FAULT_MSG_POWER_TOO_HIGH = 19,
    /**@name 无效频率 */
    FAULT_MSG_INVALID_FREQ_RECEIVED = 20,
    /**@name 无效参数值 */
    FAULT_MSG_INVALID_PARAMETER_VALUE = 21,
    /**@name 功率太低 */
    FAULT_MSG_POWER_TOO_LOW = 22,
    /**@name 无效的数据位数 */
    FAULT_MSG_WRONG_NUM_BITS_TO_TX = 23,
    /**@name 超时时间太长 */
    FAULT_MSG_TIMEOUT_TOO_LONG = 24,
    /**@name 未实现的功能 */
    FAULT_UNIMPLEMENTED_FEATURE = 25,
    /**@name 无效波特率 */
    FAULT_INVALID_BAUD_RATE = 26,
    /**@name 找不到标记 */
    FAULT_NO_TAGS_FOUND = 64,
    /**@name 故障写入传递锁定失败 */
    FAULT_WRITE_PASSED_LOCK_FAILED = 65,
    /**@name 故障协议未读取数据 */
    FAULT_PROTOCOL_NO_DATA_READ = 66,
    /**@name 故障AFE未亮起 */
    FAULT_AFE_NOT_ON = 67,
    /**@name 故障协议写入失败 */
    FAULT_PROTOCOL_WRITE_FAILED = 68,
    /**@name 此协议未实现错误 */
    FAULT_NOT_IMPLEMENTED_FOR_THIS_PROTOCOL = 69,
    /**@name 故障协议无效写入数据 */
    FAULT_PROTOCOL_INVALID_WRITE_DATA = 70,
    /**@name 故障协议地址无效 */
    FAULT_PROTOCOL_INVALID_ADDRESS = 71,
    /**@name 故障常规标记错误 */
    FAULT_GENERAL_TAG_ERROR = 72,
    /**@name 故障数据太大 */
    FAULT_DATA_TOO_LARGE = 73,
    /**@name 故障协议无效读取数据 */
    FAULT_PROTOCOL_INVALID_READ_DATA = 74,
    /**@name 错误协议无效的删除密码 */
    FAULT_PROTOCOL_INVALID_KILL_PASSWORD = 74,
    /**@name 故障测试失败 */
    FAULT_TEST_FAILED = 75,
    /**@name 故障协议天线端口无效 */
    FAULT_PROTOCOL_INVALID_ANTENNA_PORT = 76,
    /**@name 故障协议删除失败 */
    FAULT_PROTOCOL_KILL_FAILED = 76,
    /**@name 故障协议位解码失败 */
    FAULT_PROTOCOL_BIT_DECODING_FAILED = 77,
    /**@name 故障协议无效的EPC */
    FAULT_PROTOCOL_INVALID_EPC = 78,
    /**@name 故障协议无效的数据 */
    FAULT_PROTOCOL_INVALID_NUM_DATA = 79,
    /**@name 协议其他错误 */
    FAULT_GEN2_PROTOCOL_OTHER_ERROR = 81,
    /**@name 故障协议无效的PC */
    FAULT_GEN2_PROTOCOL_MEMORY_OVERRUN_BAD_PC = 82,
    /**@name 故障协议内存锁定 */
    FAULT_GEN2_PROTOCOL_MEMORY_LOCKED = 83,
    /**@name 故障协议电源不足 */
    FAULT_GEN2_PROTOCOL_INSUFFICIENT_POWER = 84,
    /**@name 故障协议非特定错误 */
    FAULT_GEN2_PROTOCOL_NON_SPECIFIC_ERROR = 85,
    /**@name 故障协议未知错误 */
    FAULT_GEN2_PROTOCOL_UNKNOWN_ERROR = 86,
    /**@name 故障协议验证失败 */
    FAULT_VERIFY_FAILED = 87,
    /**@name 故障协议无效的数据 */
    FAULT_AHAL_INVALID_FREQ = 112,
    /**@name 故障协议通道占用 */
    FAULT_AHAL_CHANNEL_OCCUPIED = 113,
    /**@name 故障协议发射机打开 */
    FAULT_AHAL_TRANSMITTER_ON = 114,
    /**@name 故障协议天线未连接 */
    FAULT_AHAL_ANTENNA_NOT_CONNECTED = 115,
    /**@name 故障协议温度超过限制 */
    FAULT_AHAL_TEMPERATURE_EXCEED_LIMITS = 116,
    /**@name 故障协议高回波损耗 */
    FAULT_AHAL_HIGH_RETURN_LOSS = 117,
    /**@name 故障协议PLL未锁定 */
    FAULT_AHAL_PLL_NOT_LOCKED = 118,
    /**@name 故障协议无效的天线配置 */
    FAULT_AHAL_INVALID_ANTENNA_CONFIG = 119,
    /**@name 故障系统未知错误 */
    FAULT_SYSTEM_UNKNOWN_ERROR = 159
}
/**@name 设置设备端口的UDP数据 */
export type ScanDeviceRFlyI160UDPData = {
    mac: string;
    targetIp: string;
    targetPort: number;
    readerPort: number;
    readerIp: string;
    readerMask: string;
    readerGeteway: string;
    mode: number;
    version?: string;
};
/**@name 设置盘点数据 */
export interface DeviceRFlyI160CheckData {
    /**@name 信号强度 */
    RSSI: number;
    /**@name 天线端口 */
    ant: number;
    /**@name 标签epc */
    value: string;
    readCount: number;
    PC: string;
    deviceId?: string;
    lastReadTime?: number;
}
/**@name 设备选择区域 */
export declare enum RFlyI160SelectAreaEnum {
    EPC = 1,
    TID = 2,
    USER = 3
}
