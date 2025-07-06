/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ILogService } from '../../../platform/log/common/logService';
import { IFetcherService } from '../../../platform/networking/common/fetcherService';
import { IInstantiationService } from '../../../util/vs/platform/instantiation/common/instantiation';
import { BYOKAuthType } from '../common/byokProvider';
import { BaseOpenAICompatibleBYOKRegistry } from './baseOpenAICompatibleProvider';

export class VllmBYOKModelRegistry extends BaseOpenAICompatibleBYOKRegistry {
	constructor(
		_vllmBaseUrl: string,
		@IFetcherService _fetcherService: IFetcherService,
		@ILogService _logService: ILogService,
		@IInstantiationService _instantiationService: IInstantiationService,
	) {
		super(
			BYOKAuthType.None,
			'VLLM',
			`${_vllmBaseUrl}/v1`,
			_fetcherService,
			_logService,
			_instantiationService
		);
	}
}