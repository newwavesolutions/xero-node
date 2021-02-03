
export class EmployeeStatutorySickLeave {
    /**
    * The unique identifier (guid) of a statutory leave
    */
    'statutoryLeaveID'?: string;
    /**
    * The unique identifier (guid) of the employee
    */
    'employeeID': string;
    /**
    * The unique identifier (guid) of the \"Statutory Sick Leave (non-pensionable)\" pay item
    */
    'leaveTypeID': string;
    /**
    * The date when the leave starts
    */
    'startDate': string;
    /**
    * The date when the leave ends
    */
    'endDate': string;
    /**
    * the type of statutory leave
    */
    'type'?: string;
    /**
    * the type of statutory leave
    */
    'status'?: string;
    /**
    * The days of the work week the employee is scheduled to work at the time the leave is taken
    */
    'workPattern': Array<string>;
    /**
    * Whether the sick leave was pregnancy related
    */
    'isPregnancyRelated': boolean;
    /**
    * Whether the employee provided sufficent notice and documentation as required by the employer supporting the sick leave request
    */
    'sufficientNotice': boolean;
    /**
    * Whether the leave was entitled to receive payment
    */
    'isEntitled'?: boolean;
    /**
    * The amount of requested time (in weeks)
    */
    'entitlementWeeksRequested'?: number;
    /**
    * The amount of statutory sick leave time off (in weeks) that is available to take at the time the leave was requested
    */
    'entitlementWeeksQualified'?: number;
    /**
    * A calculated amount of time (in weeks) that remains for the statutory sick leave period
    */
    'entitlementWeeksRemaining'?: number;
    /**
    * Whether another leave (Paternity, Shared Parental specifically) occurs during the requested leave\'s period. While this is allowed it could affect payment amounts
    */
    'overlapsWithOtherLeave'?: boolean;
    /**
    * If the leave requested was considered \"not entitled\", the reasons why are listed here.
    */
    'entitlementFailureReasons'?: Array<EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statutoryLeaveID",
            "baseName": "statutoryLeaveID",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "leaveTypeID",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "workPattern",
            "baseName": "workPattern",
            "type": "Array<string>"
        },
        {
            "name": "isPregnancyRelated",
            "baseName": "isPregnancyRelated",
            "type": "boolean"
        },
        {
            "name": "sufficientNotice",
            "baseName": "sufficientNotice",
            "type": "boolean"
        },
        {
            "name": "isEntitled",
            "baseName": "isEntitled",
            "type": "boolean"
        },
        {
            "name": "entitlementWeeksRequested",
            "baseName": "entitlementWeeksRequested",
            "type": "number"
        },
        {
            "name": "entitlementWeeksQualified",
            "baseName": "entitlementWeeksQualified",
            "type": "number"
        },
        {
            "name": "entitlementWeeksRemaining",
            "baseName": "entitlementWeeksRemaining",
            "type": "number"
        },
        {
            "name": "overlapsWithOtherLeave",
            "baseName": "overlapsWithOtherLeave",
            "type": "boolean"
        },
        {
            "name": "entitlementFailureReasons",
            "baseName": "entitlementFailureReasons",
            "type": "Array<EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeStatutorySickLeave.attributeTypeMap;
    }
}

export namespace EmployeeStatutorySickLeave {
    export enum EntitlementFailureReasonsEnum {
        UnableToCalculateAwe = <any> 'UnableToCalculateAwe',
        AweLowerThanLel = <any> 'AweLowerThanLel',
        NotQualifiedInPreviousPiw = <any> 'NotQualifiedInPreviousPiw',
        ExceededMaximumEntitlementWeeksOfSsp = <any> 'ExceededMaximumEntitlementWeeksOfSsp',
        ExceededMaximumDurationOfPiw = <any> 'ExceededMaximumDurationOfPiw',
        SufficientNoticeNotGiven = <any> 'SufficientNoticeNotGiven'
    }
}
