import { TableSetting, FieldType } from 'src/app/share/table/model';

export class PositionSetting {
    public static TableSetting: TableSetting = {
        headerSetting: [
            { headerName: 'Name', model: 'name' },
          ],
        popupFields: [
            { name: 'Name', type: FieldType.Txt, model: 'name', placeholder: "Name" },
        ]
    }
}