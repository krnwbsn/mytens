import type { IUserProfileData } from './iuserprofiledata';
import type { IReposData } from './ireposdata';
import type { IProfileItemsData } from './iprofileitemsdata';

export interface ICard {
  avatar: string;
  userProfileData: IUserProfileData;
  reposData: IReposData[];
  handleClear: () => void;
  profileItemsData: IProfileItemsData[];
}
