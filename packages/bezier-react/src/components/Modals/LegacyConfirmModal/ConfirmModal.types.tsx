/* eslint-disable no-restricted-imports */
import React from 'react'

import type { ModalProps } from '../LegacyModal'

export interface ConfirmModalProps extends ModalProps {
  /**
   * @description To confirm on the ConfirmModal
   */
  onConfirm: (e: React.MouseEvent | React.KeyboardEvent) => void
}