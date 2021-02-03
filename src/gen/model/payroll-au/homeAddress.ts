import { State } from '././state';

export class HomeAddress {
    /**
    * Address line 1 for employee home address
    */
    'addressLine1': string;
    /**
    * Address line 2 for employee home address
    */
    'addressLine2'?: string;
    /**
    * Suburb for employee home address
    */
    'city'?: string;
    'region'?: State;
    /**
    * PostCode for employee home address
    */
    'postalCode'?: string;
    /**
    * Country of HomeAddress
    */
    'country'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLine1",
            "baseName": "AddressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "AddressLine2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "Region",
            "type": "State"
        },
        {
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HomeAddress.attributeTypeMap;
    }
}

