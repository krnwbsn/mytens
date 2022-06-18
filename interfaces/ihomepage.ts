import { IReposData } from './ireposdata';
import { IUserProfileData } from './iuserprofiledata';

export interface IHomePage {
  userProfileData: IUserProfileData;
  reposData: IReposData[];
  handleClick: () => void;
  handleChange: (key: string, value: string) => void;
  formValue: { userName: string | string[] };
  handleClear: () => void;
  queryUserName?: string | string[];
}
