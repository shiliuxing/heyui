import Notify from '../base/notify';
import utils from '../../utils/utils';
import config from '../../utils/config';

const prefixCls = 'h-modal';
const hasDivider = config.getOption('modal', 'hasDivider');

let Default = {
  middle: false,
  hasDivider
}

function Modal(originalParam) {
  let cls = prefixCls;
  if (originalParam.hasDivider || Default.hasDivider) {
    cls = `${cls} h-notify-has-divider`;
  }
  let param = utils.extend({ type: cls, hasMask: true, closeOnMask: true, buttons: ['cancel'] }, Default, originalParam, true);
  return Notify(param);
}

function modal(param) {
  return new Modal(param);
}

modal.config = (options) => {
  if (options.middle) {
    Default.middle = options.middle;
  }
};

export default modal;
