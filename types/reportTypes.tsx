export interface ILocation {
  value: number;
  title: string;
}

export interface IFieldReport {
  farm_id: number;
  farm_area: string;
  farm_name: string;
  farmer_name: string;
  gender: string;
  age: number;
  contact_no: number;
  organization_name: string;
  municipality_name:string;
  province_name:string;
  district_name:string
  crop_type_name: string;
  plantation_date: string;
  ward: number;
  ward_number: number;
  tole_name: string;
  farm_polygon_json:JSON
  extra_field:JSON
  current_phase:String
}

export interface IFieldFilters {
  limit: number;
  offset: number;
  search: string;
  project__id: number;
  organization__id?: number;
  arm_area_min: string;
  farm_area_max: string;
  tole_name: string;
}
