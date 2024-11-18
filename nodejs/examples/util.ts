// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: Copyright The LanceDB Authors
import * as fs from "fs";
import { tmpdir } from "os";
import * as path from "path";

export async function withTempDirectory(
  fn: (tempDir: string) => Promise<void>,
) {
  const tmpDirPath = fs.mkdtempSync(path.join(tmpdir(), "temp-dir-"));
  try {
    await fn(tmpDirPath);
  } finally {
    fs.rmSync(tmpDirPath, { recursive: true });
  }
}