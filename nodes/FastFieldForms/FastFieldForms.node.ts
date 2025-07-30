import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export const nodeDescription: INodeTypeDescription = {
	displayName: 'Fast Field Forms',
	name: 'fastFieldForms',
	icon: 'file:fastfieldforms.svg',
	group: ['transform'],
	version: 1,
	description: 'Interact with FastFieldForms API',
	defaults: {
		name: 'FastFieldForms',
		color: '#00bcd4',
	},
	inputs: ['main'],
	outputs: ['main'],
	properties: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			options: [
				{
					name: 'Create',
					value: 'create',
				},
				{
					name: 'Update',
					value: 'update',
				},
				{
					name: 'Delete',
					value: 'delete',
				},
			],
			default: 'create',
		},
	],
};

export const nodeType: INodeType = {
	description: nodeDescription,
};
