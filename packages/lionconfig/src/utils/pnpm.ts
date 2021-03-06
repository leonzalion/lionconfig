import { findWorkspacePackagesNoCheck } from '@pnpm/find-workspace-packages';
import findUp from 'find-up';
import * as path from 'node:path';

export async function findWorkspaceOfPackage(
	packageDir: string
): Promise<{ path: string } | undefined> {
	const pnpmWorkspaceYamlPath = findUp.sync('pnpm-workspace.yaml');
	if (pnpmWorkspaceYamlPath === undefined) {
		return undefined;
	}

	const workspacePackages = await findWorkspacePackagesNoCheck(
		path.dirname(pnpmWorkspaceYamlPath)
	);
	if (workspacePackages.some((pkg) => pkg.dir === packageDir)) {
		return { path: path.dirname(pnpmWorkspaceYamlPath) };
	} else {
		return undefined;
	}
}
