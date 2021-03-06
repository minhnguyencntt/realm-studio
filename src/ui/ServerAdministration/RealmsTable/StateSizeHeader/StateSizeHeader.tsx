////////////////////////////////////////////////////////////////////////////
//
// Copyright 2018 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import { Popover, PopoverBody } from 'reactstrap';

import './StateSizeHeader.scss';

// @see https://github.com/bvaughn/react-virtualized/blob/9.18.5/source/Table/defaultHeaderRenderer.js

interface IStateSizeHeaderProps {
  isPopoverOpen: boolean;
  label: React.ReactNode;
  labelElement?: HTMLElement;
  onLabelRef: (labelElement: HTMLElement) => void;
  onTogglePopover: () => void;
}

export const StateSizeHeader = ({
  isPopoverOpen,
  label,
  labelElement,
  onLabelRef,
  onTogglePopover,
}: IStateSizeHeaderProps) => (
  <div className="ReactVirtualized__Table__headerTruncatedText">
    <span ref={onLabelRef}>{label}</span>
    <i
      className="StateSizeHeader__QuestionIcon fa fa-question"
      onClick={onTogglePopover}
    />
    {labelElement ? (
      <Popover
        isOpen={isPopoverOpen}
        target={labelElement}
        toggle={onTogglePopover}
        placement="bottom"
      >
        <PopoverBody>Recomputed once a day</PopoverBody>
      </Popover>
    ) : null}
  </div>
);
