
export class Schedule {
    /**
    * Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months)
    */
    'period'?: number;
    /**
    * One of the following - WEEKLY or MONTHLY
    */
    'unit'?: Schedule.UnitEnum;
    /**
    * Integer used with due date type e.g 20 (of following month), 31 (of current month)
    */
    'dueDate'?: number;
    /**
    * the payment terms
    */
    'dueDateType'?: Schedule.DueDateTypeEnum;
    /**
    * Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited)
    */
    'startDate'?: string;
    /**
    * The calendar date of the next invoice in the schedule to be generated
    */
    'nextScheduledDate'?: string;
    /**
    * Invoice end date – only returned if the template has an end date set
    */
    'endDate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "period",
            "baseName": "Period",
            "type": "number"
        },
        {
            "name": "unit",
            "baseName": "Unit",
            "type": "Schedule.UnitEnum"
        },
        {
            "name": "dueDate",
            "baseName": "DueDate",
            "type": "number"
        },
        {
            "name": "dueDateType",
            "baseName": "DueDateType",
            "type": "Schedule.DueDateTypeEnum"
        },
        {
            "name": "startDate",
            "baseName": "StartDate",
            "type": "string"
        },
        {
            "name": "nextScheduledDate",
            "baseName": "NextScheduledDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "EndDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }
}

export namespace Schedule {
    export enum UnitEnum {
        WEEKLY = <any> 'WEEKLY',
        MONTHLY = <any> 'MONTHLY'
    }
    export enum DueDateTypeEnum {
        DAYSAFTERBILLDATE = <any> 'DAYSAFTERBILLDATE',
        DAYSAFTERBILLMONTH = <any> 'DAYSAFTERBILLMONTH',
        DAYSAFTERINVOICEDATE = <any> 'DAYSAFTERINVOICEDATE',
        DAYSAFTERINVOICEMONTH = <any> 'DAYSAFTERINVOICEMONTH',
        OFCURRENTMONTH = <any> 'OFCURRENTMONTH',
        OFFOLLOWINGMONTH = <any> 'OFFOLLOWINGMONTH'
    }
}
