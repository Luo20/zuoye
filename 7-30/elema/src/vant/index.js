import Vue from 'vue'

import { 
    Icon 
} from 'vant';
import { 
    Search 
} from 'vant';
import { 
    Grid, GridItem 
} from 'vant';
import { 
    Divider 
} from 'vant';
//下拉菜单
import { 
    DropdownMenu, DropdownItem 
  } from 'vant';

export default () => {
    Vue.use(Icon);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
}