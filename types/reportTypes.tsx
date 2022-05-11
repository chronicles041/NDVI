export interface ILocation {
  value: number;
  title: string;
}

type phaseDetail = {
  name: string;
  value: number;
  phaseValue: number;
};
export interface IFieldReport {
  farm_id: number;
  farm_area: number;
  farm_name: string;
  farmer_name: string;
  gender: string;
  age: number;
  contact_no: number;
  organization_name: string;
  municipality_name: string;
  province_name: string;
  district_name: string;
  crop_type_name: string;
  // plantation_date: string;
  ward: number;
  ward_number: number;
  tole_name: string;
  farm_polygon_json: JSON;
  extra_field: JSON;
  current_phase: phaseDetail;
  previous_phase: phaseDetail;
  current_phase_value: number;
  previous_phase_value: number;
  current_phase_name: string;
  previous_phase_name: string;
  yield_estimation_77: number;
  yield_estimation_120: number;
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
  has_season: Boolean;
}
