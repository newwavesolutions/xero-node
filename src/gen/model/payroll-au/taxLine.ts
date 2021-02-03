import { ManualTaxType } from '././manualTaxType';

export class TaxLine {
    /**
    * Xero identifier for payslip tax line ID.
    */
    'payslipTaxLineID'?: string;
    /**
    * The tax line amount
    */
    'amount'?: number;
    /**
    * Name of the tax type.
    */
    'taxTypeName'?: string;
    /**
    * Description of the tax line.
    */
    'description'?: string;
    'manualTaxType'?: ManualTaxType;
    /**
    * The tax line liability account code. For posted pay run you should be able to see liability account code
    */
    'liabilityAccount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payslipTaxLineID",
            "baseName": "PayslipTaxLineID",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "taxTypeName",
            "baseName": "TaxTypeName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "manualTaxType",
            "baseName": "ManualTaxType",
            "type": "ManualTaxType"
        },
        {
            "name": "liabilityAccount",
            "baseName": "LiabilityAccount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaxLine.attributeTypeMap;
    }
}

